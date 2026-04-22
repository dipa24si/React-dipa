import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

export default function Customers() {
    const [customers, setCustomers] = useState(customersData);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze"
    });

    const handleAddCustomer = () => {
        setFormData({
            id: `CUST${String(customers.length + 1).padStart(3, "0")}`,
            name: "",
            email: "",
            phone: "",
            loyalty: "Bronze"
        });
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone) {
            setCustomers([...customers, formData]);
            setShowModal(false);
            setFormData({ id: "", name: "", email: "", phone: "", loyalty: "Bronze" });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const getLoyaltyColor = (loyalty) => {
        switch (loyalty) {
            case "Gold":
                return "bg-yellow-100 text-yellow-800";
            case "Silver":
                return "bg-gray-100 text-gray-800";
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
            >
                <button
                    onClick={handleAddCustomer}
                    className="bg-hijau text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
                >
                    + Add New Customer
                </button>
            </PageHeader>

            {/* Table */}
            <div className="p-5">
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phone</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 font-mono">{customer.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{customer.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{customer.phone}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLoyaltyColor(customer.loyalty)}`}>
                                            {customer.loyalty}
                                        </span>
                                    </td>
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
                            <h2 id="modal-title" className="text-xl font-semibold">Add New Customer</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Customer ID</label>
                                <input
                                    type="text"
                                    value={formData.id}
                                    disabled
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                    placeholder="Enter customer name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                    placeholder="Enter phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Loyalty Level</label>
                                <select
                                    name="loyalty"
                                    value={formData.loyalty}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hijau focus:border-transparent outline-none"
                                >
                                    <option value="Bronze">Bronze</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Gold">Gold</option>
                                </select>
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
                                    Add Customer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
