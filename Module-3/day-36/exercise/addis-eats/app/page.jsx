import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description:
    "Communal Warmth, Slow-Cooked Heritage. Experience handcrafted wats, stone-ground teff injera, and fresh roasted coffee at Mesob House.",
};

export default async function Home() {
  return (
    <div className="flex flex-col">
      {/* Ticker Banner */}
      <div className="bg-[#12281d] text-[#e5d2bc] px-4 py-2 text-xs md:text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>
          🌾 Tsom / Fasting Observance: 12-Item Royal Beyaynetu Vegan Platter
          simmered fresh all day.
        </span>
        <Link
          href="/menu?category=fasting"
          className="text-[#72b992] underline font-semibold"
        >
          See Fasting Specialties →
        </Link>
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-12 md:py-16 items-center">
        <div>
          <div className="text-xs font-bold text-[#6b1f0a] tracking-widest uppercase mb-3">
            TRADITIONAL HABESHA HEARTH
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#6b1f0a] leading-tight mb-5">
            Communal Warmth, <br />
            <em className="italic font-semibold">Slow-Cooked Heritage.</em>
          </h1>
          <p className="text-[#6e5e54] text-base leading-relaxed mb-8 max-w-lg">
            Handcrafted wats, ancient stone-ground teff injera, and velvety
            kitfo simmered in 72-hour infused niter kibbeh and heirloom berbere
            harvested from the Ethiopian highlands.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/menu"
              className="bg-[#6b1f0a] text-white px-6 py-3 rounded-lg font-semibold text-sm"
            >
              Explore Todays Specials →
            </Link>
            <Link
              href="/menu"
              className="border border-[#6b1f0a] text-[#6b1f0a] px-6 py-3 rounded-lg font-semibold text-sm"
            >
              Full Banquet Menu
            </Link>
            <span className="text-xs font-semibold text-[#8c6820]">
              ☕ Buna Ceremony 4:00 PM Daily
            </span>
          </div>

          <div className="flex gap-10 pt-6 border-t border-[#f0e2d3]">
            <div>
              <strong className="block text-xl text-[#6b1f0a]">100%</strong>
              <span className="text-xs text-[#6e5e54]">Brown & White Teff</span>
            </div>
            <div>
              <strong className="block text-xl text-[#6b1f0a]">6+ Hours</strong>
              <span className="text-xs text-[#6e5e54]">
                Slow Slow Caramelized
              </span>
            </div>
            <div>
              <strong className="block text-xl text-[#6b1f0a]">Gursha</strong>
              <span className="text-xs text-[#6e5e54]">Hospitality Shared</span>
            </div>
          </div>
        </div>

        {/* Hero Feature Image Card */}
        <div className="relative">
          <div className="absolute -top-4 right-5 bg-white px-3.5 py-1.5 rounded-full text-xs shadow-md z-10 font-medium">
            🌱 Stone Ground Fresh Berbere Pepper
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#f0e2d3]">
            <Image
              src="/og/kitfo.jpg"
              alt="Great Mesob Feast"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-xl flex justify-between items-center border border-white/50">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#6e5e54] tracking-wider">
                  CENTERPIECE
                </span>
                <h3 className="font-serif text-lg font-bold text-[#6b1f0a]">
                  Great Mesob Feast
                </h3>
              </div>
              <div className="font-bold text-[#6b1f0a] text-lg">ETB 1,650</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Specials Section */}
      <section className="bg-[#f7ede2] px-6 md:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#6b1f0a] tracking-widest uppercase">
              FROM THE CLAY POTS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#6b1f0a] mt-1">
              Today Curated Chef Specials
            </h2>
            <p className="text-[#6e5e54] text-sm max-w-lg mt-2">
              Carefully balanced stews prepared using our master rich 40-spice
              blend, served piping hot on hand-stretched injera.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#6b1f0a] text-white px-3.5 py-1.5 rounded-full text-xs font-medium">
              All (3)
            </button>
            <button className="bg-white border border-[#f0e2d3] text-[#2c1a11] px-3.5 py-1.5 rounded-full text-xs">
              Poultry
            </button>
            <button className="bg-white border border-[#f0e2d3] text-[#2c1a11] px-3.5 py-1.5 rounded-full text-xs">
              Fasting / Tsom
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#f0e2d3]">
            <div className="h-48 bg-[#8b3a1a] relative">
              <span className="absolute top-3 left-3 bg-white/90 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                Chef Special Today
              </span>
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] px-2.5 py-1 rounded-full">
                🌶️ Spicy
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-serif text-xl font-bold text-[#6b1f0a]">
                  Royal Doro Wat
                </h3>
                <span className="font-bold text-[#6b1f0a]">ETB 650</span>
              </div>
              <p className="text-[#6e5e54] text-xs leading-relaxed mb-5">
                Free-range poultry slow-simmered 6 hours in caramelized sweet
                shallots, organic spiced clarified butter (kibbeh), house-cured
                berbere, and organic egg.
              </p>
              <div className="flex justify-between items-center">
                <Link href="/menu" className="text-xs font-bold text-[#6b1f0a]">
                  View Details
                </Link>
                <button className="bg-[#6b1f0a] text-white px-3.5 py-1.5 rounded-md text-xs font-semibold">
                  + Quick Add
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#f0e2d3]">
            <div className="h-48 bg-[#a65e2e] relative">
              <span className="absolute top-3 left-3 bg-white/90 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                Chef Special Today
              </span>
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] px-2.5 py-1 rounded-full">
                🌶️ Medium Heat
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-serif text-xl font-bold text-[#6b1f0a]">
                  Mesob Meat Combo
                </h3>
                <span className="font-bold text-[#6b1f0a]">ETB 980</span>
              </div>
              <p className="text-[#6e5e54] text-xs leading-relaxed mb-5">
                The ultimate highland feast: Siga Wat (boneless spicy beef),
                Derek Tibs (rosemary, garlic, and fresh jalapeno sauteed cubes),
                and golden Alicha Kik Wat.
              </p>
              <div className="flex justify-between items-center">
                <Link href="/menu" className="text-xs font-bold text-[#6b1f0a]">
                  View Details
                </Link>
                <button className="bg-[#6b1f0a] text-white px-3.5 py-1.5 rounded-md text-xs font-semibold">
                  + Quick Add
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#f0e2d3]">
            <div className="h-48 bg-[#2d5a3f] relative">
              <span className="absolute top-3 left-3 bg-white/90 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                🌱 100% Plant-Based (Tsom)
              </span>
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] px-2.5 py-1 rounded-full">
                Balanced Spices
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-serif text-xl font-bold text-[#6b1f0a]">
                  Special Fasting Beyaynetu
                </h3>
                <span className="font-bold text-[#6b1f0a]">ETB 480</span>
              </div>
              <p className="text-[#6e5e54] text-xs leading-relaxed mb-5">
                A colorful spectrum of 8 plant-based delicacies: Misir Wat
                (spicy lentils), Kik Alicha (sweet split peas), Gomen (braised
                collards), bubbling cozy Shiro Tegabino...
              </p>
              <div className="flex justify-between items-center">
                <Link href="/menu" className="text-xs font-bold text-[#6b1f0a]">
                  View Details
                </Link>
                <button className="bg-[#6b1f0a] text-white px-3.5 py-1.5 rounded-md text-xs font-semibold">
                  + Quick Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spirit of Gursha Banner */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-16 py-12 md:py-16">
        <div>
          <span className="text-xs font-bold text-[#6b1f0a] tracking-widest uppercase">
            THE SPIRIT OF GURSHA
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#6b1f0a] my-3 leading-tight">
            Those Who Share a Mesob Never Walk Alone
          </h2>
          <p className="text-[#6e5e54] text-sm leading-relaxed mb-8">
            Gursha is the cherished act of honoring a companion by rolling
            choice morsels of wat in warm injera and feeding them directly by
            hand. At Mesob House, every table is configured for communal warmth
            and slow gratitude.
          </p>

          <div className="bg-[#f6ebd0] p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <strong className="block text-sm text-[#2c1a11]">
                ☕ Authentic Clay Jebena Buna Ceremony
              </strong>
              <p className="text-xs text-[#6e5e54]">
                Daily at 4:00 PM. Hand-roasted green beans in our courtyard with
                smoked frankincense (Itan).
              </p>
            </div>
            <Link
              href="/checkout"
              className="text-xs font-bold text-[#6b1f0a] whitespace-nowrap"
            >
              Reserve Ceremony Seating →
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#f0e2d3] flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold text-[#8c6820] tracking-wider uppercase">
                HOUSE-FERMENTED
              </span>
              <h3 className="font-serif text-lg font-bold text-[#6b1f0a] mt-1">
                Golden Tej (Honey Wine)
              </h3>
              <p className="text-xs text-[#6e5e54] mt-1">
                100% raw highlands forest honey and gesho, oak-aged 45 days.
              </p>
            </div>
            <div className="text-right whitespace-nowrap pl-4">
              <span className="block font-bold text-sm text-[#6b1f0a] mb-2">
                ETB 350
              </span>
              <button className="bg-[#f1e2d5] text-[#2c1a11] px-3 py-1 rounded text-xs font-semibold">
                + Add Carafe
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#f0e2d3] flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold text-[#8c6820] tracking-wider uppercase">
                DAILY INFUSION
              </span>
              <h3 className="font-serif text-lg font-bold text-[#6b1f0a] mt-1">
                Highland Spiced Shai
              </h3>
              <p className="text-xs text-[#6e5e54] mt-1">
                Steeped black tea infused with cardamom, cinnamon cloves, and
                fresh ginger.
              </p>
            </div>
            <div className="text-right whitespace-nowrap pl-4">
              <span className="block font-bold text-sm text-[#6b1f0a] mb-2">
                ETB 80
              </span>
              <button className="bg-[#f1e2d5] text-[#2c1a11] px-3 py-1 rounded text-xs font-semibold">
                + Add Cup
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#f0e2d3] flex justify-between items-center">
            <div>
              <h3 className="font-serif text-base font-bold text-[#6b1f0a]">
                Extra Teff Injera Rolls (Basket of 3)
              </h3>
              <p className="text-xs text-[#6e5e54]">
                100% pure fermented teff grain injera.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm text-[#6b1f0a]">ETB 90</span>
              <button className="bg-[#f1e2d5] text-[#2c1a11] px-3 py-1 rounded text-xs font-semibold">
                + Add Extra
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Testimonials Section */}
      <section className="bg-[#fbf5ef] px-6 md:px-16 py-12 md:py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#6b1f0a] tracking-widest uppercase">
            VOICES AROUND THE MESOB
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#6b1f0a] mt-1">
            Honored Guest Reflections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-[#f0e2d3]">
            <div className="text-[#f59e0b] mb-3">★★★★★</div>
            <p className="text-xs md:text-sm text-[#2c1a11] italic leading-relaxed mb-6">
              The Doro Wat was so reminiscent of my grandmothers cooking in
              Gondar. The berbere depth and slow-shredded onion sweet finish are
              impossible to find elsewhere.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f1e2d5] text-[#6b1f0a] font-bold text-xs flex items-center justify-center">
                AM
              </div>
              <div>
                <strong className="block text-xs font-bold">
                  Amanuel Mengistu
                </strong>
                <span className="text-[10px] text-[#6e5e54]">
                  Daily Resident & Food Critic
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#f0e2d3]">
            <div className="text-[#f59e0b] mb-3">★★★★★</div>
            <p className="text-xs md:text-sm text-[#2c1a11] italic leading-relaxed mb-6">
              Their Fasting Beyaynetu is unmatched on Wednesdays. 12 vibrant
              dishes, and the Shiro arrived piping hot. True culinary devotion!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f1e2d5] text-[#6b1f0a] font-bold text-xs flex items-center justify-center">
                ST
              </div>
              <div>
                <strong className="block text-xs font-bold">
                  Sara Tesfaye
                </strong>
                <span className="text-[10px] text-[#6e5e54]">
                  Plant-Based Dining Advocate
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#f0e2d3]">
            <div className="text-[#f59e0b] mb-3">★★★★★</div>
            <p className="text-xs md:text-sm text-[#2c1a11] italic leading-relaxed mb-6">
              We hosted a 20-person family reunion around their large
              handcrafted mesobs. The coffee ceremony with fresh frankincense
              made the evening unforgettable.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f1e2d5] text-[#6b1f0a] font-bold text-xs flex items-center justify-center">
                DK
              </div>
              <div>
                <strong className="block text-xs font-bold">
                  Dr. Kebede Wolde
                </strong>
                <span className="text-[10px] text-[#6e5e54]">
                  Diaspora Homecoming Guest
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="bg-[#6b1f0a] text-white mx-6 md:mx-16 my-8 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-xs font-bold text-[#e5b3a3] tracking-widest uppercase">
            JOIN OUR TABLE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl my-2">
            Experience Authentic Habesha Warmth Tonight
          </h2>
          <p className="text-[#e5d2bc] text-sm max-w-lg">
            Whether gathering around our circular mesobs for communal dining or
            ordering freshly baked injera to your home in Addis Ababa.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/checkout"
            className="bg-[#f6ebd0] text-[#6b1f0a] px-6 py-3 rounded-lg font-bold text-sm"
          >
            Book a Mesob Table
          </Link>
          <Link
            href="/menu"
            className="bg-white text-[#2c1a11] px-6 py-3 rounded-lg font-bold text-sm"
          >
            View Complete Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
