import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import LoadingSpinner from "../components/LoadingSpinner";

export default function CustomerDetail() {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCustomer = async () => {
            const { data } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", id)
                .single();

            setCustomer(data);
            setLoading(false);
        };

        loadCustomer();
    }, [id]);

    const getLoyaltyColor = (tier) => {
        switch (tier) {
            case "Gold":
                return "bg-yellow-100 text-yellow-800";
            case "Silver":
                return "bg-gray-100 text-gray-800";
            case "Platinum":
                return "bg-sky-100 text-sky-800";
            case "Bronze":
                return "bg-orange-100 text-orange-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    if (loading) {
        return <LoadingSpinner text="Memuat customer..." />;
    }

    if (!customer) {
        return (
            <div className="p-6">
                <div className="bg-white rounded-lg shadow max-w-lg mx-auto p-6 text-center">
                    <h2 className="text-2xl font-bold mb-2">Customer tidak ditemukan</h2>
                    <p className="text-gray-500 mb-4">Data customer yang dipilih belum tersedia.</p>
                    <Link to="/customers" className="text-green-600 font-semibold hover:underline">
                        Kembali ke Customers
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-lg mx-auto overflow-hidden">
                <div className="bg-green-50 px-6 py-8 text-center border-b border-green-100">
                    <img
                        src="/avatar.svg"
                        alt={customer.full_name}
                        className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                    />
                    <p className="text-sm font-semibold text-green-600 mb-2">{customer.id}</p>
                    <h2 className="text-3xl font-bold text-gray-900">{customer.full_name || "-"}</h2>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-500">Role</span>
                        <span className="font-semibold text-gray-800">{customer.role}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-500">Points</span>
                        <span className="font-semibold text-gray-800">{customer.points}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-500">Tier</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLoyaltyColor(customer.tier)}`}>
                            {customer.tier}
                        </span>
                    </div>

                    <Link
                        to="/customers"
                        className="inline-flex justify-center w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-green-600"
                    >
                        Kembali ke Customers
                    </Link>
                </div>
            </div>
        </div>
    );
}
