import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { customersAPI } from "../services/customersAPI";

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await customersAPI.fetchCustomers();
            setCustomers(data);
        } catch (err) {
            setError(`Gagal memuat customer: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleTierChange = async (customer, tier) => {
        try {
            setLoading(true);
            await customersAPI.updateCustomer(customer.id, { tier });
            await loadCustomers();
        } catch (err) {
            setError(`Gagal mengubah tier: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handlePointsChange = async (customer, points) => {
        try {
            await customersAPI.updateCustomer(customer.id, { points: Number(points) });
            await loadCustomers();
        } catch (err) {
            setError(`Gagal mengubah poin: ${err.message}`);
        }
    };

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

    return (
        <div id="customers-container">
            <PageHeader
                title="Customers"
                breadcrumbs={["Dashboard", "Customers"]}
            />

            <div className="p-5">
                {error && <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-800">{error}</div>}
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    {loading && <LoadingSpinner text="Memuat customer..." />}
                    {!loading && customers.length === 0 && <EmptyState text="Belum ada customer" />}
                    {!loading && customers.length > 0 && (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Points</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tier</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-600 font-mono">{customer.id.slice(0, 8)}</td>
                                        <td className="px-6 py-4 text-sm font-medium">
                                            <Link
                                                to={`/customers/${customer.id}`}
                                                className="text-green-500 font-semibold hover:underline"
                                            >
                                                {customer.full_name || "-"}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <input
                                                type="number"
                                                defaultValue={customer.points}
                                                onBlur={(event) => handlePointsChange(customer, event.target.value)}
                                                className="w-24 rounded-lg border border-gray-200 px-3 py-2"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <select
                                                value={customer.tier}
                                                onChange={(event) => handleTierChange(customer, event.target.value)}
                                                className={`px-3 py-2 rounded-lg text-xs font-semibold ${getLoyaltyColor(customer.tier)}`}
                                            >
                                                <option value="Bronze">Bronze</option>
                                                <option value="Silver">Silver</option>
                                                <option value="Gold">Gold</option>
                                                <option value="Platinum">Platinum</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {new Date(customer.created_at).toLocaleDateString("id-ID")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
