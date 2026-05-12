export function getProductImage(product) {
  const imageFiles = {
    "Nasi Goreng": "Nasi_Goreng.jpg",
    "Mie Ayam": "Mie_Ayam.jpg",
    "Sate Ayam": "Sate_ayam.jpg",
    Rendang: "Rendang.JPG",
    "Gado-Gado": "Gado-Gado.jpg",
    Bakso: "Bakso.JPG",
    "Soto Ayam": "Soto_ayam.JPG",
    "Ayam Goreng": "Ayam_goreng.JPG",
    Pempek: "Pempek.JPG",
    "Es Cendol": "Es_Cendol.jpg",
    "Es Teler": "Es_teler.jpg",
    Kerupuk: "Kerupuk.jpg",
    "Nasi Uduk": "Nasi_uduk.jpg",
    "Lontong Sayur": "Lontong_sayur.jpg",
    "Martabak Manis": "Martabak_manis.jpg",
    "Martabak Telur": "Martabak_telur.jpg",
    Klepon: "Klepon.JPG",
    Serabi: "Serabi.jpg",
    "Tahu Isi": "Tahu_isi.jpg",
    "Tempe Mendoan": "Tempe_mendoan.jpg",
    "Es Doger": "Es_doger.jpg",
    "Es Pisang Ijo": "Es_pisang_ijo.jpg",
    Gudeg: "Gudeg.jpg",
    Rawon: "Rawon.jpg",
    "Sop Buntut": "Sop_buntut.jpg",
    "Ayam Bakar": "Ayam_bakar.JPG",
    "Ikan Bakar": "Ikan_bakar.jpg",
    "Cah Kangkung": "Kangkung_belacan.jpg",
    Capcay: "Capcay.jpg",
    "Sayur Asem": "Sayur_asem.jpg",
  }

  const fileName = imageFiles[product.title] || imageFiles["Nasi Goreng"]

  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=900`
}

export function getProductImageFallback(product) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#ecfdf5"/>
          <stop offset="100%" stop-color="#fde68a"/>
        </linearGradient>
      </defs>
      <rect width="900" height="520" fill="url(#bg)"/>
      <circle cx="450" cy="230" r="130" fill="#ffffff" opacity="0.92"/>
      <ellipse cx="450" cy="260" rx="150" ry="54" fill="#d1d5db"/>
      <ellipse cx="450" cy="248" rx="132" ry="44" fill="#ffffff"/>
      <circle cx="410" cy="235" r="28" fill="#f97316"/>
      <circle cx="458" cy="225" r="24" fill="#22c55e"/>
      <circle cx="500" cy="240" r="30" fill="#facc15"/>
      <text x="450" y="420" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#111827">${product.title}</text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
