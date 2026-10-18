export const metadata = {
  title: "Your Cart · Mesob House",
  description:
    "Review your selected Ethiopian stews, provisions, and prepare for checkout.",
  alternates: { canonical: "/cart" },
};

export default function CartLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#fbf5ef] text-[#2c1a11] px-6 md:px-16 py-8">
      {/* Top Delivery Notice Banner */}
      <div className="bg-[#f4e7da] border border-[#e5d5c5] rounded-xl px-4 py-3 mb-8 flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
        <div className="flex items-center gap-2">
          <span>🚚</span>
          <strong>Free Highland Delivery:</strong>
          <span className="text-[#6e5e54]">
            Complimentary delivery across Bole, Kazanchis, and Sarbet on orders
            over ETB 1,200!
          </span>
        </div>
        <span className="bg-[#183e2b] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
          ✓ THRESHOLD UNLOCKED
        </span>
      </div>

      {/* Title & Progress Tracker */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <span className="text-[10px] font-bold text-[#8c6820] tracking-widest uppercase block">
            COMMUNAL FEASTING
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#6b1f0a] mt-0.5">
            Your Gursha Basket
          </h1>
        </div>

        {/* Multi-step Checkout Progress Indicator */}
        <div className="flex items-center gap-2 text-xs font-semibold bg-white p-2 rounded-xl border border-[#f0e2d3] shadow-sm">
          <span className="bg-[#6b1f0a] text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <span className="w-4 h-4 bg-white/20 rounded-full text-[10px] flex items-center justify-center">
              1
            </span>
            Review Basket
          </span>
          <span className="text-gray-300">/</span>
          <span className="text-[#6e5e54] px-2">2 Delivery Details</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#6e5e54] px-2">3 Confirmation</span>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}
