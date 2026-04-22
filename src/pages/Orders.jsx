import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

export default function Orders() {
    const [orders, setOrders] = useState(ordersData);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        customerName: "",
        status: "Pending",
        totalPrice: "",
        orderDate: ""
    });

    const handleAddOrder = () => {
        setFormData({
            id: `ORD${String(orders.length + 1).padStart(3, "0")}`,
            customerName: "",
            status: "Pending",
            totalPrice: "",
            orderDate: new Date().toISOString().split('T')[0]
        });
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.customerName && formData.totalPrice && formData.orderDate) {
            setOrders([...orders, formData]);
            setShowModal(false);
            setFormData({ id: "", customerName: "", status: "Pending", totalPrice: "", orderDate: "" });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
            >
                <button
                    onClick={handleAddOrder}
                    className="bg-hijau text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
                >
                    + Add New Order
                </button>
            </PageHeader>

            {/* Table */}
            <div className="p-5">
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Price</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 font-mono">{order.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.customerName}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-semibold">{order.totalPrice}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.orderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div id="modal-overlay" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div id="modal" className="bg-white rounded-lg w-full max-w-md shadow-2xl">
                        <div id="modal-header" className="flex items-center justify-between p-6 border-b">
                            <h2 id="modal-title" className="text-xl font-semibold">Add New Order</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Order ID</label>
                                <input
                                    type="text"
                                    value={formData.id}
                                    disabled
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name *</label>
                                <input
                                    type="text"
                                    name="customerName"
                                    value={formData.customerName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                    placeholder="Enter customer name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Total Price *</label>
                                <input
                                    type="text"
                                    name="totalPrice"
                                    value={formData.totalPrice}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                    placeholder="e.g., Rp 125.000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Order Date *</label>
                                <input
                                    type="date"
                                    name="orderDate"
                                    value={formData.orderDate}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-hijau text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                                >
                                    Add Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
