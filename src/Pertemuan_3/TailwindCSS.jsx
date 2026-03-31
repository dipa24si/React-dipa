export default function TailwindCSS() {
  return (
    <div>
      <h1 className="border m-4">Belajar Tailwind CSS 4</h1>
      <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">
        Click Me
      </button>
      <Spacing title="card" content="Lorem ipsum" />
      <Typography />
      <BorderRadius />
      <BackgroundColors />
      <FlexboxGrid />
      <ShadowEffects />
      
      <hr className="my-10" /> 
      <h2 className="text-center font-bold text-xl text-gray-400">(Profile Card)</h2>
      <ProfileCard />

      <hr className="my-10 border-dashed" />
      <h2 className="text-center font-bold text-xl text-gray-400 uppercase tracking-widest">
        Pricing Card
      </h2>
      <PricingCard />
    </div>
  );
}

function Spacing(props) {
  return (
    <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
      <h2 className="text-lg font-semibold">{props.title}</h2>
      <p className="mt-2 text-gray-600">{props.content}</p>
    </div>
  );
}

function Typography() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold text-blue-600">
        Tailwind Typography
      </h1>
      <p className="text-gray-400 text-lg mt-2">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <div>
      <button className="border-2 border-blue-500 text-blue-500 ml-4 px-4 py-2 hover:shadow-md rounded-lg">
        {" "}
        Klik Saya{" "}
      </button>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-pink-300 text-white p-6 m-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">Tailwind Colors</h3>
      <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">MyWebsite</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white shadow-lg p-6 m-4 rounded-lg hover:shadow-2xl transition duration-300 border border-gray-100">
      <h3 className="text-xl font-semibold">Hover me!</h3>
      <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
    </div>
  );
}

function ProfileCard() {
  return (
    // mt-4 menaikkan posisi kartu (jarak atas jadi lebih kecil)
    <div className="mx-auto mt-4 mb-8 max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-transform duration-300 hover:scale-105">
      {/* Bagian Atas / Header Berwarna */}
      <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600" />

      {/* Bagian Konten */}
      <div className="px-6 pb-6">
        {/* Foto Profil */}
        <div className="relative -mt-12 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-pink-300 text-3xl font-bold text-white shadow-md">
            DT
          </div>
        </div>

        {/* Teks & Deskripsi */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Dipa Tranggana</h2>
          <p className="font-medium text-blue-600">Front-End Developer</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Sedang belajar Tailwind CSS 4 untuk membuat antarmuka web yang
            modern, cepat, dan responsif.
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-xl bg-gray-800 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700">
            Follow
          </button>
          <button className="flex-1 rounded-xl border-2 border-gray-200 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="mx-auto my-10 max-w-sm rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Label Rekomendasi */}
      <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        Most Popular
      </span>
      
      {/* Harga */}
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold tracking-tight text-gray-900">$29</span>
        <span className="ml-1 text-xl font-semibold text-gray-500">/mo</span>
      </div>
      
      <h3 className="mt-2 text-xl font-bold text-gray-800">Pro Plan</h3>
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Cocok untuk developer yang ingin fitur lengkap dan performa maksimal.
      </p>

      {/* List Fitur */}
      <ul className="mt-8 space-y-4">
        {[
          "Unlimited Projects",
          "Custom Domain",
          "24/7 Support",
          "Advanced Analytics"
        ].map((feature) => (
          <li key={feature} className="flex items-center text-gray-600 text-sm">
            {/* Icon Centang Biru */}
            <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Tombol Beli */}
      <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-blue-200 shadow-lg transition hover:bg-blue-700 hover:shadow-xl active:scale-95">
        Pilih Paket Ini
      </button>
    </div>
  );
}