"use client";

export default function OrdersError({ error, reset }) {
  return (
    <div className="p-12 max-w-lg mx-auto text-center space-y-4 my-16 bg-white rounded-2xl border border-red-200 shadow-sm">
      <div className="text-3xl">⚠️</div>
      <h2 className="font-serif text-2xl font-bold text-red-600">
        Failed to Load Orders
      </h2>
      <p className="text-xs text-[#6e5e54]">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-[#6b1f0a] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#521707]"
      >
        Try Again
      </button>
    </div>
  );
}
