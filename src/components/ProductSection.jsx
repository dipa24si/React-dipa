import ProductCard from "./ProductCard";

export default function ProductSection({ 
  title = "Produk Terbaru",
  description = "Koleksi produk terbaru kami",
  products = []
}) {
  return (
    <section className="mb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}
