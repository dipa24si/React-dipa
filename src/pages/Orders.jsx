import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { ordersAPI } from "../services/ordersAPI";
import { useAuth } from "../context/useAuth";

export default function Orders() {
    const { isAdmin } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await ordersAPI.fetchOrders();
            setOrders(data);
        } catch (err) {
            setError(`Gagal memuat orders: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (order, status) => {
        try {
            setLoading(true);
            await ordersAPI.updateOrderStatus(order.id, status);
            await loadOrders();
        } catch (err) {
            setError(`Gagal mengubah status: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-800";
            case "Pending":
                return "bg-yellow-100 text-yellow-800";
            case "Cancelled":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div id="orders-container">
            <PageHeader
                title="Orders"
                breadcrumbs={["Dashboard", "Orders"]}
            />

            <div className="p-5">
                {error && <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-800">{error}</div>}
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    {loading && <LoadingSpinner text="Memuat orders..." />}
                    {!loading && orders.length === 0 && <EmptyState text="Belum ada order" />}
                    {!loading && orders.length > 0 && (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Items</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Price</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-600 font-mono">{order.id.slice(0, 8)}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.profiles?.full_name || "-"}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {order.order_items?.map((item) => item.products?.name).join(", ") || "-"}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {isAdmin ? (
                                                <select
                                                    value={order.status}
                                                    onChange={(event) => handleStatusChange(order, event.target.value)}
                                                    className={`px-3 py-2 rounded-lg text-xs font-semibold ${getStatusColor(order.status)}`}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Completed">Completed</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            ) : (
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 font-semibold">
                                            Rp {Number(order.total_amount).toLocaleString("id-ID")}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {new Date(order.created_at).toLocaleDateString("id-ID")}
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
