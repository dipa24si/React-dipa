import React from "react";

// 1. Komponen untuk Teks Responsif (Efek Cahaya Air)
function ResponsiveText() {
  return (
    <div className="mb-10 p-8 bg-cyan-900/30 backdrop-blur-md rounded-3xl border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
      <h2 className="font-bold text-2xl text-cyan-300 mb-3 flex items-center">
        <span className="mr-2">🫧</span> 1. Responsive Text
      </h2>
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-white drop-shadow-md transition-all duration-700">
        Ukuran teks ini akan menyesuaikan kedalaman layar, seperti cahaya yang menembus permukaan laut.
      </p>
      <p className="mt-4 text-xs text-cyan-200/60 italic uppercase tracking-widest">
        Current Depth: {`Adjusting via Breakpoints`}
      </p>
    </div>
  );
}

// 2. Komponen untuk Lebar Kolom (Gaya Terumbu Karang & Arus)
function ResponsiveWidth() {
  return (
    <div className="mb-10">
      <h2 className="font-bold text-2xl text-cyan-100 mb-6 flex items-center">
        <span className="mr-2">🌊</span> 2. Currents (Flex)
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-gradient-to-br from-cyan-600 to-blue-800 w-full md:w-1/2 p-10 text-white font-bold rounded-[2rem] shadow-2xl border border-white/10 hover:rotate-1 transition-transform cursor-pointer">
          <p className="text-[10px] opacity-70 uppercase mb-2 tracking-tighter">Surface Layer</p>
          Shallow Water (50% on Desktop)
        </div>
        <div className="bg-gradient-to-br from-blue-800 to-slate-900 w-full md:w-1/2 p-10 text-white font-bold rounded-[2rem] shadow-2xl border border-white/10 hover:-rotate-1 transition-transform cursor-pointer">
          <p className="text-[10px] opacity-70 uppercase mb-2 tracking-tighter">Deep Layer</p>
          Midnight Zone (50% on Desktop)
        </div>
      </div>
    </div>
  );
}

// 3. Komponen untuk Grid (Gaya Marine Cards)
function ResponsiveLayout() {
  const marineItems = [
    { id: 1, name: "Coral Reef", icon: "🪸", depth: "10m" },
    { id: 2, name: "Jellyfish", icon: "🪼", depth: "50m" },
    { id: 3, name: "Anglerfish", icon: "🐟", depth: "1000m" },
    { id: 4, name: "Submarine", icon: "🚢", depth: "2500m" },
  ];

  return (
    <div className="mb-8">
      <h2 className="font-bold text-2xl text-cyan-100 mb-6 flex items-center">
        <span className="mr-2">🐚</span> 3. Grid Explorer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {marineItems.map((item) => (
          <div key={item.id} className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl">
            {/* Dekorasi Cahaya */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/20 blur-3xl group-hover:bg-cyan-400/40 transition-colors"></div>
            
            <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-500">
              {item.icon}
            </div>
            <h3 className="font-bold text-white text-lg">{item.name}</h3>
            <p className="text-sm text-cyan-400 font-mono">Depth: {item.depth}</p>
            
            <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResponsiveDesign() {
  return (
    <div className="min-h-screen bg-[#000d1a] p-4 md:p-12 overflow-x-hidden relative">
      {/* Efek Partikel Laut di Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-800 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4 tracking-widest uppercase">
            Oceanography Module
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic">
            RESPONSIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">& GRID</span> DESIGN
          </h1>
          <div className="h-2 w-32 bg-cyan-500 mt-4 rounded-full shadow-[0_0_15px_#22d3ee]"></div>
        </header>
        
        <ResponsiveText />
        <ResponsiveWidth />
        <ResponsiveLayout />
        
        <footer className="mt-20 text-center text-cyan-700 font-medium text-sm">
          🌊 Designed for Marine Explorers & Developers 🫧
        </footer>
      </div>
    </div>
  );
} 