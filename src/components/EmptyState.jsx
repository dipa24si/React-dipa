import { BsDatabaseExclamation } from "react-icons/bs";

export default function EmptyState({ text = "Belum ada data" }) {
  return (
    <div className="p-8 text-center text-gray-500">
      <div className="mb-2 flex justify-center text-4xl">
        <BsDatabaseExclamation />
      </div>
      <p>{text}</p>
    </div>
  );
}
