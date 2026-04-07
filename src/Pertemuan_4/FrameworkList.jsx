import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    // Background Gradasi dari biru laut dangkal ke biru dalam
    <div className="p-8 bg-linear-to-b from-cyan-500 to-blue-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-4xl font-extrabold text-center mb-10 drop-shadow-lg tracking-tight">
        </h1>
        
        {frameworkData.map((item) => (
          <div
            key={item.id}
            // Efek Glassmorphism (Semi-transparan seperti air)
            className="backdrop-blur-md bg-white/20 border border-white/30 p-6 mb-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                {/* Nama dengan warna Putih Mutiara */}
                <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-sm">
                  {item.name}
                </h2>
                <p className="text-cyan-100 text-lg mb-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* ID Badge kecil di pojok */}
              <span className="text-white/50 font-mono text-xl">#0{item.id}</span>
            </div>

            <div className="bg-blue-900/40 rounded-xl p-4 mb-4 border border-blue-400/20">
              <p className="text-sm text-blue-100">
                🚢 <span className="opacity-70">Architect:</span>{" "}
                <span className="font-semibold text-cyan-300">
                  {item.details.developer}
                </span>
              </p>
              <p className="text-sm text-blue-100">
                📅 <span className="opacity-70">First Launch:</span>{" "}
                <span className="text-white">{item.details.releaseYear}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Button bergaya Link */}
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-inner"
              >
                ⚓ Dive to Website
              </a>

              {/* Tags dengan warna Bubble (Gelembung Air) */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-cyan-100 border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}