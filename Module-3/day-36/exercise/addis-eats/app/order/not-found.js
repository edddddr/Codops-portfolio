import Link from "next/link";

export default function OrdersNotFound() {
  return (
    <div className="p-12 max-w-lg mx-auto text-center space-y-4 my-16 bg-white rounded-2xl border border-[#f0e2d3] shadow-sm">
      <div className="text-4xl">🧺</div>
      <h2 className="font-serif text-2xl font-bold text-[#6b1f0a]">
        No Orders Found
      </h2>
      <p className="text-xs text-[#6e5e54]">
        There are currently no dispatch records available in this query range.
      </p>
      <Link
        href="/orders"
        className="inline-block bg-[#6b1f0a] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#521707]"
      >
        Reset Order Query
      </Link>
    </div>
  );
}
