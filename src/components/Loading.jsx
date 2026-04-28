export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-lg">
        <div className="h-16 w-16 rounded-full border-4 border-green-500 border-t-transparent animate-spin" />
        <p className="text-sm text-gray-600">Loading content, please wait...</p>
      </div>
    </div>
  );
}
