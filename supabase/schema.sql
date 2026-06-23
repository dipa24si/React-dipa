create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'Member' check (lower(role) in ('admin', 'member')),
  points integer not null default 0,
  tier text not null default 'Bronze' check (tier in ('Bronze', 'Silver', 'Gold', 'Platinum')),
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric not null default 0,
  stock integer not null default 0,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  total_amount numeric not null default 0,
  status text not null default 'Pending' check (status in ('Pending', 'Completed', 'Cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity integer not null check (quantity > 0),
  price numeric not null default 0
);

create or replace function public.requester_role()
returns text
language sql
security definer
set search_path = public
stable
as $$
  select lower(role) from public.profiles where id = auth.uid()
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    case lower(coalesce(nullif(new.raw_user_meta_data->>'role', ''), 'member'))
      when 'admin' then 'Admin'
      else 'Member'
    end
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.recalculate_member_rewards(member_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  completed_count integer;
  completed_amount numeric;
  next_tier text;
begin
  select count(*), coalesce(sum(total_amount), 0)
    into completed_count, completed_amount
  from public.orders
  where user_id = member_id and status = 'Completed';

  next_tier := case
    when completed_count >= 25 then 'Platinum'
    when completed_count >= 10 then 'Gold'
    when completed_count >= 5 then 'Silver'
    else 'Bronze'
  end;

  update public.profiles
  set
    points = floor(completed_amount / 10000)::integer,
    tier = next_tier
  where id = member_id;
end;
$$;

create or replace function public.handle_order_reward_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'UPDATE' and old.status is distinct from new.status then
    perform public.recalculate_member_rewards(new.user_id);
  elsif tg_op = 'INSERT' then
    perform public.recalculate_member_rewards(new.user_id);
  end if;

  return new;
end;
$$;

drop trigger if exists on_order_reward_update on public.orders;
create trigger on_order_reward_update
  after insert or update of status on public.orders
  for each row execute function public.handle_order_reward_update();

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

drop policy if exists "profiles_select_self_or_admin" on public.profiles;
create policy "profiles_select_self_or_admin"
on public.profiles for select
using (auth.uid() = id or public.requester_role() = 'admin');

drop policy if exists "profiles_update_self_name" on public.profiles;
create policy "profiles_update_self_name"
on public.profiles for update
using (auth.uid() = id)
with check (
  auth.uid() = id
  and role = (select role from public.profiles where id = auth.uid())
  and points = (select points from public.profiles where id = auth.uid())
  and tier = (select tier from public.profiles where id = auth.uid())
);

drop policy if exists "profiles_update_admin" on public.profiles;
create policy "profiles_update_admin"
on public.profiles for update
using (public.requester_role() = 'admin')
with check (public.requester_role() = 'admin');

drop policy if exists "products_select_all" on public.products;
create policy "products_select_all"
on public.products for select
using (true);

drop policy if exists "products_admin_all" on public.products;
create policy "products_admin_all"
on public.products for all
using (public.requester_role() = 'admin')
with check (public.requester_role() = 'admin');

drop policy if exists "orders_select_owner_or_admin" on public.orders;
create policy "orders_select_owner_or_admin"
on public.orders for select
using (auth.uid() = user_id or public.requester_role() = 'admin');

drop policy if exists "orders_insert_member_owner" on public.orders;
create policy "orders_insert_member_owner"
on public.orders for insert
with check (auth.uid() = user_id and public.requester_role() = 'member');

drop policy if exists "orders_update_admin" on public.orders;
create policy "orders_update_admin"
on public.orders for update
using (public.requester_role() = 'admin')
with check (public.requester_role() = 'admin');

drop policy if exists "order_items_select_by_order_access" on public.order_items;
create policy "order_items_select_by_order_access"
on public.order_items for select
using (
  exists (
    select 1 from public.orders
    where orders.id = order_items.order_id
      and (orders.user_id = auth.uid() or public.requester_role() = 'admin')
  )
);

drop policy if exists "order_items_insert_member_order" on public.order_items;
create policy "order_items_insert_member_order"
on public.order_items for insert
with check (
  exists (
    select 1 from public.orders
    where orders.id = order_items.order_id
      and orders.user_id = auth.uid()
      and public.requester_role() = 'member'
  )
);
