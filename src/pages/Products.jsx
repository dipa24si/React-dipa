import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import products from "../data/products.json";

export default function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((products) =>
    products.title.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusBadge = (stock) => {
    if (stock > 20) {
      return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Available</span>;
    } else if (stock > 10) {
      return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Limited</span>;
    } else {
      return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Out of Stock</span>;
    }
  };

  return (
    <div id="products-container">
      <PageHeader
        title="Products"
        breadcrumbs={["Dashboard", "Products"]}
      />

      <div className="p-5">
        <div className="mb-5 max-w-md">
          <input
            type="text"
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-900">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Code</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Brand</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-900 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">
                    <Link to={`/products/${product.id}`} className="text-green-500 font-semibold hover:underline">
                      {product.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-mono">{product.code}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.brand}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                    Rp {product.price.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">{product.stock}</td>
                  <td className="px-6 py-4 text-sm">{getStatusBadge(product.stock)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
