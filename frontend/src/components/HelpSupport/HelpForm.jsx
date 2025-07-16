import { X } from "lucide-react";

export default function HelpForm({ onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white mt-16 bg-opacity-90 z-50">
      <div className="bg-white p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>
        <h2 className="text-green-700 text-xl font-bold text-center mb-4">
          Need More Help? Contact Us!
        </h2>
        <form>
          <label className="block mb-2 font-bold">Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2 font-bold">Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2 font-bold">Message</label>
          <textarea
            placeholder="Please describe your question or issue..."
            className="w-full p-2 border border-gray-300 rounded h-24 mb-4"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-bold rounded cursor-pointer"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
