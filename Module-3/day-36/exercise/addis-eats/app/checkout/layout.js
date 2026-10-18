export const metadata = {
  title: "Checkout · Mesob House",
  description:
    "Complete your order securely and get authentic Ethiopian food delivered directly to your doorstep.",
  alternates: { canonical: "/checkout" },
};

export default function CheckoutLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#fbf5ef] text-[#2c1a11] px-6 md:px-16 py-8">
      {/* Top Method & Location Banner */}
      <div className="bg-[#white] border border-[#f0e2d3] rounded-2xl p-2 mb-8 flex justify-center max-w-xl mx-auto shadow-sm">
        <div className="flex gap-2 w-full">
          <button className="flex-1 bg-[#6b1f0a] text-white py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm">
            <span>🛵</span> Prompt Delivery across Addis
          </button>
          <button className="flex-1 bg-transparent text-[#6e5e54] hover:text-[#2c1a11] py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
            <span>🛍️</span> Dine-In Pickup (Bole)
          </button>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}
