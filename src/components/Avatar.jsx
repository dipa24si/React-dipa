export default function Avatar({ name, image = null }) {
  if (image) {
    return (
      <img 
        src={image} 
        alt={name} 
        className="w-10 h-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-800">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
