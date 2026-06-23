import { supabase } from "./supabaseClient";

export const ordersAPI = {
  async fetchOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*, profiles(full_name), order_items(*, products(name))")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async createOrder(userId, product) {
    const totalAmount = Number(product.price);

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        user_id: userId,
        total_amount: totalAmount,
        status: "Pending",
      })
      .select()
      .single();

    if (orderError) throw orderError;

    const { error: itemError } = await supabase.from("order_items").insert({
      order_id: order.id,
      product_id: product.id,
      quantity: 1,
      price: totalAmount,
    });

    if (itemError) throw itemError;
    return order;
  },

  async updateOrderStatus(id, status) {
    const { data, error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
