export const metadata = {
  title: "Menu",
  description: "Doro Wat, Tibs, Kitfo and Shiro, delivered across Addis Ababa.",
  alternates: { canonical: "/menu" },
};

export default function MenuLayout({ children }) {
  return (
    <div className="bg-[#fbf5ef] min-h-screen text-[#2c1a11]">
      {/* Header Banner */}
      <div className="pt-10 pb-6 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-[#f4e7da] border border-[#e5d5c5] px-3.5 py-1 rounded-full text-xs font-bold text-[#8c6820] tracking-wider uppercase mb-3">
          <span>☕</span> HANDCRAFTED GONDAR & ADDIS SPICES
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-[#6b1f0a] font-bold mb-3 tracking-tight">
          Our Complete Culinary Heritage
        </h1>
        <p className="text-[#6e5e54] text-sm md:text-base leading-relaxed">
          Every dish is prepared daily from scratch using sun-dried spices,
          stone-ground legume flours, and clarified herbal butter sourced
          directly from highland farm cooperatives.
        </p>
      </div>

      {/* Main Area */}
      <section className="px-6 md:px-12 pb-16 max-w-7xl mx-auto">
        {children}
      </section>
    </div>
  );
}
