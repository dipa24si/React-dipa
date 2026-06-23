import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { productsAPI } from "../services/productsAPI";
import { ordersAPI } from "../services/ordersAPI";
import { useAuth } from "../context/useAuth";

export default function Products() {
  const { user, isAdmin, isMember } = useAuth();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await productsAPI.fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(`Gagal memuat produk: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await productsAPI.createProduct({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      });
      setFormData({ name: "", description: "", price: "", stock: "", image_url: "" });
      setMessage("Produk berhasil ditambahkan");
      await loadProducts();
    } catch (err) {
      setError(`Gagal menambah produk: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;

    try {
      setLoading(true);
      setError("");
      await productsAPI.deleteProduct(id);
      setMessage("Produk berhasil dihapus");
      await loadProducts();
    } catch (err) {
      setError(`Gagal menghapus produk: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async (product) => {
    try {
      setLoading(true);
      setError("");
      await ordersAPI.createOrder(user.id, product);
      setMessage("Pesanan berhasil dibuat dengan status Pending");
    } catch (err) {
      setError(`Gagal checkout: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(search.toLowerCase())
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
        {error && <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-800">{error}</div>}
        {message && <div className="mb-4 rounded-lg bg-emerald-100 p-3 text-emerald-800">{message}</div>}

        {isAdmin && (
          <form onSubmit={handleCreateProduct} className="mb-6 grid gap-3 rounded-lg bg-white p-5 shadow-md md:grid-cols-5">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Nama produk" required className="rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-hijau" />
            <input name="price" value={formData.price} onChange={handleChange} placeholder="Harga" type="number" required className="rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-hijau" />
            <input name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" type="number" required className="rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-hijau" />
            <input name="description" value={formData.description} onChange={handleChange} placeholder="Deskripsi" className="rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-hijau" />
            <button disabled={loading} className="rounded-lg bg-hijau px-4 py-2 font-semibold text-white hover:bg-emerald-600 disabled:opacity-50">
              Tambah Produk
            </button>
          </form>
        )}

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
          {loading && <LoadingSpinner text="Memuat produk..." />}
          {!loading && filteredProducts.length === 0 && <EmptyState text="Belum ada produk" />}
          {!loading && filteredProducts.length > 0 && (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-900">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-900 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium">
                      <Link to={`/products/${product.id}`} className="text-green-500 font-semibold hover:underline">
                        {product.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.description || "-"}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                      Rp {Number(product.price).toLocaleString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-sm text-green-600 font-semibold">{product.stock}</td>
                    <td className="px-6 py-4 text-sm">{getStatusBadge(product.stock)}</td>
                    <td className="px-6 py-4 text-sm">
                      {isAdmin && (
                        <button onClick={() => handleDeleteProduct(product.id)} className="text-red-600 font-semibold hover:underline">
                          Delete
                        </button>
                      )}
                      {isMember && (
                        <button onClick={() => handleCheckout(product)} className="text-green-600 font-semibold hover:underline">
                          Checkout
                        </button>
                      )}
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
