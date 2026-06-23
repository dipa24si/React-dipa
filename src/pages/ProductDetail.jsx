import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            const { data } = await supabase
                .from("products")
                .select("*")
                .eq("id", id)
                .single();

            setProduct(data);
            setLoading(false);
        };

        loadProduct();
    }, [id]);

    const getStatusBadge = (stock) => {
        if (stock > 20) {
            return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Available</span>;
        }

        if (stock > 10) {
            return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Limited</span>;
        }

        return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Out of Stock</span>;
    };

    if (loading) {
        return <LoadingSpinner text="Memuat produk..." />;
    }

    if (!product) {
        return (
            <div className="p-6">
                <div className="bg-white rounded-lg shadow max-w-lg mx-auto p-6 text-center">
                    <h2 className="text-2xl font-bold mb-2">Produk tidak ditemukan</h2>
                    <p className="text-gray-500 mb-4">Data produk yang dipilih belum tersedia.</p>
                    <Link to="/products" className="text-green-600 font-semibold hover:underline">
                        Kembali ke Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-lg mx-auto overflow-hidden">
                {product.image_url && (
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                    />
                )}
                <div className="bg-green-50 px-6 py-8 text-center border-b border-green-100">
                    <p className="text-sm font-semibold text-green-600 mb-2">{product.id}</p>
                    <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-500">Deskripsi</span>
                        <span className="font-semibold text-gray-800">{product.description || "-"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-500">Harga</span>
                        <span className="font-bold text-gray-900">
                            Rp {Number(product.price).toLocaleString("id-ID")}
                        </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-500">Stock</span>
                        <span className="font-semibold text-green-600">{product.stock}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-500">Status</span>
                        {getStatusBadge(product.stock)}
                    </div>

                    <Link
                        to="/products"
                        className="inline-flex justify-center w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-green-600"
                    >
                        Kembali ke Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
