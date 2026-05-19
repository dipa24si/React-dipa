export default function HeroSection({ 
  title = "Selamat Datang", 
  description = "Deskripsi hero section", 
  buttonText = "Mulai Sekarang",
  buttonAction = () => {},
  backgroundImage = null
}) {
  return (
    <div 
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-lg mb-8"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' } : {}}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>
        
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          {description}
        </p>

        <button 
          onClick={buttonAction}
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
