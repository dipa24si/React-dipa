import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";

const daftarIsu = [
  {
    id: 1,
    judul: "Evaluasi & Standarisasi Anggaran Makan Bergizi Gratis (MBG)",
    kategori: "Kebijakan Publik",
    deskripsi: "Badan Gizi Nasional (BGN) memperketat standarisasi layanan SPPG (Satuan Pelayanan Pemenuhan Gizi) dan mengevaluasi efisiensi anggaran jumbo guna memastikan program berjalan tepat sasaran tanpa menurunkan kualitas nutrisi.",
    tren: "Meningkat",
    warnaKategori: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    judul: "Fluktuasi Nilai Tukar Rupiah & Tekanan Global",
    kategori: "Ekonomi",
    deskripsi: "Komite Stabilitas Sistem Keuangan (KSSK) dan Bank Indonesia terus memperkuat intervensi pasar valas dan menyesuaikan threshold beli tunai valas untuk meredam dampak kenaikan yield obligasi global.",
    tren: "Stabil",
    warnaKategori: "bg-amber-100 text-amber-800"
  },
  {
    id: 3,
    judul: "Peningkatan Fasilitas & Transformasi Layanan Haji 2026",
    kategori: "Sosial & Agama",
    deskripsi: "Kementerian Haji mendapat apresiasi atas peluncuran program ramah lansia dan disabilitas di Arab Saudi, termasuk transparansi pengelolaan dana dam jemaah haji yang kini diperluas manfaatnya.",
    tren: "Meningkat",
    warnaKategori: "bg-emerald-100 text-emerald-800"
  },
  {
    id: 4,
    judul: "Transisi Energi Hijau & Pembiayaan Sukuk Hijau",
    kategori: "Lingkungan",
    deskripsi: "Sektor keuangan nasional semakin gencar menggandeng pengembang hidro dan energi terbarukan melalui instrumen Sukuk Hijau guna mempercepat target Net Zero Emission.",
    tren: "Meningkat",
    warnaKategori: "bg-green-100 text-green-800"
  },
  {
    id: 5,
    judul: "Efisiensi BUMN & Pemangkasan Anak Usaha Telkom",
    kategori: "Ekonomi",
    deskripsi: "Badan Pengelola BUMN mengambil langkah agresif memangkas 67 anak usaha Telkom menjadi hanya 19 entitas demi merampingkan struktur bisnis dan meningkatkan profitabilitas.",
    tren: "Hot",
    warnaKategori: "bg-amber-100 text-amber-800"
  },
  {
    id: 6,
    judul: "Demam Kendaraan Listrik (EV) & Perang Harga Motor Listrik",
    kategori: "Teknologi",
    deskripsi: "Masuknya raksasa otomotif baru ke pasar Indonesia memicu persaingan ketat pada daya tahan baterai, skema swap murah, serta desakan evaluasi keberlanjutan subsidi EV.",
    tren: "Hot",
    warnaKategori: "bg-purple-100 text-purple-800"
  },
  {
    id: 7,
    judul: "Kedaulatan Digital & Pemberantasan Hoaks Nasional",
    kategori: "Teknologi",
    deskripsi: "Menjelang paruh kedua tahun, isu disinformasi—seperti isu hoaks guru honorer dan keamanan data siber—mendorong pengetatan kedaulatan informasi digital oleh Komdigi.",
    tren: "Stabil",
    warnaKategori: "bg-purple-100 text-purple-800"
  },
  {
    id: 8,
    judul: "Tata Kelola Impor Minyak Pertamina & BLU Baru",
    kategori: "Kebijakan Publik",
    deskripsi: "Pemerintah menerbitkan mekanisme baru mengenai izin impor minyak mentah dan BBM untuk memperkuat ketahanan energi nasional dan menekan kebocoran anggaran negara.",
    tren: "Meningkat",
    warnaKategori: "bg-blue-100 text-blue-800"
  },
  {
    id: 9,
    judul: "Ancaman Cuaca Ekstrem Fase El Niño",
    kategori: "Lingkungan",
    deskripsi: "BMKG memperingatkan potensi minimnya curah hujan di wilayah Indonesia Timur akibat indeks El Niño yang kembali memanas, kontras dengan potensi hujan badai jangka pendek di beberapa wilayah barat.",
    tren: "Meningkat",
    warnaKategori: "bg-green-100 text-green-800"
  },
  {
    id: 10,
    judul: "Antusiasme Siaran & Persiapan Hak Siar Piala Dunia 2026",
    kategori: "Olahraga",
    deskripsi: "Euforia masyarakat Indonesia melonjak menyambut pergelaran Piala Dunia tahun ini, mendorong digitalisasi siaran TV publik (TVRI) untuk menjamin akses siaran gratis berkualitas di pelosok negeri.",
    tren: "Hot",
    warnaKategori: "bg-red-100 text-red-800"
  }
];

export default function FiturXYZ() {
  const [pencarian, setPencarian] = useState("");
  const [kategoriTerpilih, setKategoriTerpilih] = useState("Semua");

  const kategoriUnik = ["Semua", ...new Set(daftarIsu.map(isu => isu.kategori))];

  const IsuDifilter = daftarIsu.filter(isu => {
    const cocokPencarian = isu.judul.toLowerCase().includes(pencarian.toLowerCase()) || isu.deskripsi.toLowerCase().includes(pencarian.toLowerCase());
    const cocokKategori = kategoriTerpilih === "Semua" || isu.kategori === kategoriTerpilih;
    return cocokPencarian && cocokKategori;
  });

  return (
    <div id="fitur-xyz-page">
      <PageHeader title="Fitur XYZ" breadcrumbs={["Dashboard", "Fitur XYZ"]} />
      
      <div className="p-5 mb-8">
          <p className="text-lg text-gray-600">Ini Halaman Fitur XYZ</p>
      </div>

      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              10 Isu Terhangat <span className="text-red-600">Indonesia</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Rangkuman topik, kebijakan baru, dan dinamika sosial-ekonomi yang sedang ramai diperbincangkan.
            </p>
          </div>

          {/* Kontrol Konten (Filter & Cari) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Cari isu atau kata kunci..."
                value={pencarian}
                onChange={(e) => setPencarian(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {kategoriUnik.map((kat) => (
                <button
                  key={kat}
                  onClick={() => setKategoriTerpilih(kat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors duration-200 ${
                    kategoriTerpilih === kat
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Isu */}
          {IsuDifilter.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {IsuDifilter.map((isu) => (
                <div
                  key={isu.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${isu.warnaKategori}`}>
                        {isu.kategori}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isu.tren === "Hot"
                            ? "text-red-600 animate-pulse"
                            : isu.tren === "Meningkat"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}
                      >
                        🔥 {isu.tren}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-red-600 transition-colors">
                      {isu.judul}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                      {isu.deskripsi}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                    <span>Mei 2026</span>
                    <button className="text-red-600 font-semibold hover:underline flex items-center gap-1">
                      Pelajari Selengkapnya <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <p className="text-gray-500 text-lg">Isu yang kamu cari tidak ditemukan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
