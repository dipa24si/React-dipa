import React, { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const allTags = [...new Set(frameworkData.flatMap((item) => item.tags))];

  const filteredFrameworks = frameworkData.filter((item) => {
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const matchesName = item.name.toLowerCase().includes(_searchTerm);
    const matchesDeveloper = item.details.developer
      .toLowerCase()
      .includes(_searchTerm);

    const matchesTag =
      dataForm.selectedTag === "" || item.tags.includes(dataForm.selectedTag);

    return (matchesName || matchesDeveloper) && matchesTag;
  });

  return (
    <div className="p-8 bg-linear-to-b from-cyan-500 to-blue-900 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-4xl font-extrabold text-center mb-10 drop-shadow-lg tracking-tight"></h1>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search name or developer..."
            className="flex-1 p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 backdrop-blur-sm transition-all"
            value={dataForm.searchTerm}
            onChange={handleChange}
          />

          <select
            name="selectedTag"
            className="md:w-1/3 p-3 rounded-xl bg-white/20 border border-white/30 text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-300 backdrop-blur-sm"
            value={dataForm.selectedTag}
            onChange={handleChange}
          >
            <option value="">All Tags (Semua)</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="backdrop-blur-md bg-white/20 border border-white/30 p-6 mb-6 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {item.name}
                  </h2>
                  <p className="text-cyan-100 text-lg mb-3">
                    {item.description}
                  </p>
                </div>
                <span className="text-white/50 font-mono text-xl">
                  #0{item.id}
                </span>
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
                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-inner"
                >
                  ⚓ Dive to Website
                </a>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-cyan-300 text-blue-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border border-cyan-100 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-white py-10 opacity-60 italic">
            No frameworks found in these waters... 🤿
          </div>
        )}
      </div>
    </div>
  );
}
