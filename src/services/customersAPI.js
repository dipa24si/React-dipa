import { supabase } from "./supabaseClient";

export const customersAPI = {
  async fetchCustomers() {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .ilike("role", "member")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async updateCustomer(id, values) {
    const { data, error } = await supabase
      .from("profiles")
      .update(values)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
