import { useState } from "react";
import { FaShoppingCart, FaLightbulb, FaBox } from "react-icons/fa";
import Container from "../components/Container";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import SelectField from "../components/SelectField";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductSection from "../components/ProductSection";

export default function Components() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    message: ""
  });

  const productHeaders = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000"
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000"
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000"
    }
  ];

  const categoryOptions = [
    { value: "fashion", label: "Fashion" },
    { value: "elektronik", label: "Elektronik" },
    { value: "aksesoris", label: "Aksesoris" },
    { value: "kecantikan", label: "Kecantikan" }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Cepat",
      description: "Performa aplikasi yang super cepat dan responsif"
    },
    {
      icon: "🎨",
      title: "Desain Modern",
      description: "Antarmuka yang indah dan mudah digunakan"
    },
    {
      icon: "🔒",
      title: "Aman",
      description: "Keamanan data pengguna adalah prioritas utama kami"
    }
  ];

  const sectionProducts = [
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      title: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
      description: "Sepatu sport modern dengan desain nyaman"
    },
    {
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      title: "Smartphone",
      category: "Elektronik",
      price: "Rp 4.500.000",
      description: "Smartphone dengan performa tinggi"
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      title: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
      description: "Jam tangan elegan dan tahan lama"
    }
  ];

  return (
    <Container>
      <PageHeader title="Components" />

      {/* 1. BASIC COMPONENTS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Basic Components</h2>
        <p className="text-gray-600 mb-6">
          Basic Component adalah component kecil dan sederhana yang sering digunakan berulang di banyak halaman.
        </p>

        {/* Button Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Button Component</h3>
          <p className="text-gray-600 mb-6">
            Gunakan Button untuk berbagai aksi dan tipe interaksi.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="success">Simpan</Button>
            <Button type="danger">Hapus</Button>
            <Button type="warning">Warning</Button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Button type="success">Simpan</Button>
<Button type="danger">Hapus</Button>
<Button type="primary">Primary</Button>`}
            </pre>
          </div>
        </Card>

        {/* Badge Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Badge Component</h3>
          <p className="text-gray-600 mb-6">
            Badge digunakan untuk menampilkan label kecil seperti status atau kategori.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge type="primary">Primary</Badge>
            <Badge type="secondary">Secondary</Badge>
            <Badge type="success">Aktif</Badge>
            <Badge type="danger">Pending</Badge>
            <Badge type="warning">Warning</Badge>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Badge type="success">Aktif</Badge>
<Badge type="danger">Pending</Badge>
<Badge type="warning">Warning</Badge>`}
            </pre>
          </div>
        </Card>

        {/* Avatar Component */}
        <Card>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Avatar Component</h3>
          <p className="text-gray-600 mb-6">
            Avatar menampilkan inisial atau foto profil pengguna.
          </p>

          <div className="flex items-center gap-6 mb-6">
            <div className="text-center">
              <Avatar name="Budi" />
              <p className="text-sm text-gray-600 mt-2">Budi</p>
            </div>
            <div className="text-center">
              <Avatar name="Siti" />
              <p className="text-sm text-gray-600 mt-2">Siti</p>
            </div>
            <div className="text-center">
              <Avatar name="Ahmad" />
              <p className="text-sm text-gray-600 mt-2">Ahmad</p>
            </div>
            <div className="text-center">
              <Avatar name="Rina" />
              <p className="text-sm text-gray-600 mt-2">Rina</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Avatar name="Budi"/>
<Avatar name="Siti"/>
<Avatar name="Ahmad"/>`}
            </pre>
          </div>
        </Card>
      </section>

      {/* 2. LAYOUT COMPONENTS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Layout Components</h2>
        <p className="text-gray-600 mb-6">
          Layout Component digunakan untuk menyusun struktur besar halaman sebagai kerangka halaman.
        </p>

        {/* Container Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Container Component</h3>
          <p className="text-gray-600 mb-6">
            Container adalah pembungkus terluar suatu halaman dengan padding otomatis.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold mb-3">Daftar Produk</h4>
            <p className="text-gray-600">
              Berikut adalah daftar produk terbaru yang tersedia.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Container className="bg-gray-100">
  <h1 className="text-3xl font-bold mb-4">
    Daftar Produk
  </h1>
  <p className="text-gray-600">
    Berikut adalah daftar produk terbaru.
  </p>
</Container>`}
            </pre>
          </div>
        </Card>

        {/* Footer Component */}
        <Card>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Footer Component</h3>
          <p className="text-gray-600 mb-6">
            Footer adalah komponen yang berada di bagian bawah sebagai penutup halaman.
          </p>

          <div className="bg-gray-900 text-white py-6 rounded-lg mb-6">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">MyApp</h2>
              <p className="text-gray-400 mb-4">Aplikasi sederhana berbasis React.</p>
              <div className="flex justify-center gap-4 mb-4">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Produk</a>
                <a href="#" className="hover:text-gray-300">Kontak</a>
              </div>
              <p className="text-gray-500 text-sm">© 2026 MyApp. All rights reserved.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Footer/>`}
            </pre>
          </div>
        </Card>
      </section>

      {/* 3. DATA DISPLAY COMPONENTS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Data Display Components</h2>
        <p className="text-gray-600 mb-6">
          Data Display Component digunakan untuk menampilkan informasi atau data kepada pengguna.
        </p>

        {/* Card Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Card Component</h3>
          <p className="text-gray-600 mb-6">
            Card digunakan sebagai pembungkus informasi dengan styling yang rapi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <h4 className="text-lg font-bold">Judul Card 1</h4>
              <p className="text-gray-600">Ini adalah isi dari card pertama.</p>
            </Card>
            <Card>
              <h4 className="text-lg font-bold">Judul Card 2</h4>
              <p className="text-gray-600">Ini adalah isi dari card kedua.</p>
            </Card>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Card>
  <h2 className="text-xl font-bold">Judul Card</h2>
  <p className="text-gray-600">Ini adalah isi dari card.</p>
</Card>`}
            </pre>
          </div>
        </Card>

        {/* ProductCard Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">ProductCard Component</h3>
          <p className="text-gray-600 mb-6">
            ProductCard digunakan untuk menampilkan informasi produk dengan gambar dan harga.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
              title="Sepatu Sport"
              category="Fashion"
              price="Rp 450.000"
              description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
              title="Smartphone"
              category="Elektronik"
              price="Rp 4.500.000"
              description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<ProductCard
  image="https://images.unsplash.com/photo-..."
  title="Sepatu Sport"
  category="Fashion"
  price="Rp 450.000"
  description="Sepatu sport modern..."
/>`}
            </pre>
          </div>
        </Card>

        {/* Table Component */}
        <Card>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Table Component</h3>
          <p className="text-gray-600 mb-6">
            Table digunakan untuk menampilkan data dalam bentuk tabel yang terstruktur.
          </p>

          <div className="mb-6">
            <Table headers={productHeaders}>
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-3">{index + 1}</td>
                  <td className="border px-4 py-3">{product.name}</td>
                  <td className="border px-4 py-3">{product.category}</td>
                  <td className="border px-4 py-3">{product.price}</td>
                  <td className="border px-4 py-3">
                    <Button type="primary" className="text-sm py-1">
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </Table>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Table headers={headers}>
  {products.map((product, index) => (
    <tr key={product.id} className="hover:bg-gray-50">
      <td className="border px-4 py-3">{index + 1}</td>
      <td className="border px-4 py-3">{product.name}</td>
      ...
    </tr>
  ))}
</Table>`}
            </pre>
          </div>
        </Card>
      </section>

      {/* 4. FEEDBACK COMPONENTS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Feedback Components</h2>
        <p className="text-gray-600 mb-6">
          Feedback Component digunakan untuk memberikan respon kepada pengguna setelah terjadi suatu aksi.
        </p>

        {/* Alert Component */}
        <Card>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Alert Component</h3>
          <p className="text-gray-600 mb-6">
            Alert digunakan untuk menampilkan pesan penting kepada pengguna.
          </p>

          <div className="mb-6">
            <Alert type="success" title="Sukses!">
              Perubahan data berhasil disimpan dengan baik.
            </Alert>

            <Alert type="info" title="Informasi">
              Ini adalah pesan informasi untuk pengguna.
            </Alert>

            <Alert type="warning" title="Peringatan">
              Harap berhati-hati dengan aksi yang Anda lakukan.
            </Alert>

            <Alert type="danger" title="Error">
              Terjadi kesalahan saat memproses permintaan Anda.
            </Alert>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<Alert type="success" title="Sukses!">
  Perubahan data berhasil disimpan dengan baik.
</Alert>

<Alert type="danger" title="Error">
  Terjadi kesalahan saat memproses permintaan Anda.
</Alert>`}
            </pre>
          </div>
        </Card>
      </section>

      {/* 5. FORM COMPONENTS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Form Components</h2>
        <p className="text-gray-600 mb-6">
          Form Component digunakan untuk menerima input dari pengguna dengan berbagai jenis field.
        </p>

        {/* InputField Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">InputField Component</h3>
          <p className="text-gray-600 mb-6">
            InputField digunakan untuk input teks dengan berbagai tipe (text, email, password, dll).
          </p>

          <div className="mb-6 bg-gray-50 p-6 rounded-lg">
            <InputField 
              label="Nama Lengkap"
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <InputField 
              label="Email"
              type="email"
              placeholder="contoh@email.com"
              required
            />
            <InputField 
              label="Password"
              type="password"
              placeholder="Masukkan password"
              required
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<InputField 
  label="Nama Lengkap"
  placeholder="Masukkan nama Anda"
  value={formData.name}
  onChange={(e) => setFormData({...formData, name: e.target.value})}
  required
/>`}
            </pre>
          </div>
        </Card>

        {/* TextArea Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">TextArea Component</h3>
          <p className="text-gray-600 mb-6">
            TextArea digunakan untuk input teks panjang seperti pesan atau deskripsi.
          </p>

          <div className="mb-6 bg-gray-50 p-6 rounded-lg">
            <TextArea 
              label="Pesan"
              placeholder="Masukkan pesan Anda di sini..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={5}
              required
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<TextArea 
  label="Pesan"
  placeholder="Masukkan pesan Anda..."
  rows={5}
  required
/>`}
            </pre>
          </div>
        </Card>

        {/* SelectField Component */}
        <Card>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">SelectField Component</h3>
          <p className="text-gray-600 mb-6">
            SelectField digunakan untuk memilih opsi dari daftar dropdown.
          </p>

          <div className="mb-6 bg-gray-50 p-6 rounded-lg">
            <SelectField 
              label="Kategori Produk"
              placeholder="Pilih kategori"
              options={categoryOptions}
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              required
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`const options = [
  { value: "fashion", label: "Fashion" },
  { value: "elektronik", label: "Elektronik" },
  { value: "aksesoris", label: "Aksesoris" }
];

<SelectField 
  label="Kategori Produk"
  placeholder="Pilih kategori"
  options={options}
  required
/>`}
            </pre>
          </div>
        </Card>
      </section>

      {/* 6. SECTION COMPONENTS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Section Components</h2>
        <p className="text-gray-600 mb-6">
          Section Component adalah component yang mewakili satu bagian besar dalam halaman. Jenis component ini sering digunakan pada landing page.
        </p>

        {/* HeroSection Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">HeroSection Component</h3>
          <p className="text-gray-600 mb-6">
            HeroSection adalah bagian utama landing page yang menampilkan headline dan call-to-action.
          </p>

          <div className="mb-6">
            <HeroSection 
              title="Selamat Datang di Sedap"
              description="Platform e-commerce terdepan dengan berbagai pilihan produk berkualitas tinggi dan harga terjangkau."
              buttonText="Jelajahi Sekarang"
              buttonAction={() => alert("Button clicked!")}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`<HeroSection 
  title="Selamat Datang di Sedap"
  description="Platform e-commerce terdepan..."
  buttonText="Jelajahi Sekarang"
  buttonAction={() => alert("Tombol diklik!")}
/>`}
            </pre>
          </div>
        </Card>

        {/* FeatureSection Component */}
        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">FeatureSection Component</h3>
          <p className="text-gray-600 mb-6">
            FeatureSection digunakan untuk menampilkan fitur-fitur utama aplikasi dalam grid card.
          </p>

          <div className="mb-6">
            <FeatureSection 
              title="Fitur Unggulan Kami"
              description="Nikmati berbagai keunggulan yang kami tawarkan untuk kenyamanan berbelanja Anda."
              features={features}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`const features = [
  {
    icon: "⚡",
    title: "Cepat",
    description: "Performa aplikasi yang super cepat"
  },
  {
    icon: "🎨",
    title: "Desain Modern",
    description: "Antarmuka yang indah dan mudah"
  }
];

<FeatureSection 
  title="Fitur Unggulan Kami"
  description="Nikmati berbagai keunggulan..."
  features={features}
/>`}
            </pre>
          </div>
        </Card>

        {/* ProductSection Component */}
        <Card>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">ProductSection Component</h3>
          <p className="text-gray-600 mb-6">
            ProductSection digunakan untuk menampilkan koleksi produk dalam grid layout yang rapi.
          </p>

          <div className="mb-6">
            <ProductSection 
              title="Produk Terbaru"
              description="Jelajahi koleksi produk terbaru kami dengan kualitas terbaik dan harga kompetitif."
              products={sectionProducts}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-gray-700">
{`const products = [
  {
    image: "https://...",
    title: "Sepatu Sport",
    category: "Fashion",
    price: "Rp 450.000",
    description: "Sepatu sport modern..."
  }
];

<ProductSection 
  title="Produk Terbaru"
  description="Jelajahi koleksi produk..."
  products={products}
/>`}
            </pre>
          </div>
        </Card>
      </section>

      <Footer />
    </Container>
  );
}
