"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCart } from "../../providers";

export default function DishDetailPage({ params }) {
  // Un-wrap dynamic params in Next.js 15
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const { addToCart } = useCart();

  // Component State for Interactivity
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // User Options State
  const [spiceLevel, setSpiceLevel] = useState("Traditional");
  const [injeraBase, setInjeraBase] = useState("Standard");
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  // Fetch Dish Data
  useEffect(() => {
    async function fetchDish() {
      try {
        setLoading(true);
        const res = await fetch("https://addis-eats-backend.onrender.com/menu");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        const dishes = Array.isArray(data.data)
          ? data.data
          : Array.isArray(data)
            ? data
            : [];

        const foundDish = dishes.find(
          (d) => String(d._id || d.id) === String(id),
        );

        if (!foundDish) {
          setError(true);
        } else {
          setDish(foundDish);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDish();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbf5ef] text-[#2c1a11] px-6 md:px-16 py-12 text-center">
        <p className="text-[#6e5e54] animate-pulse">Loading dish details...</p>
      </div>
    );
  }

  if (error || !dish) {
    notFound();
  }

  // Calculate Base Price and Extras
  const basePrice = Number(dish.priceETB || dish.price || 650);
  const extraInjeraPrice =
    injeraBase === "100% Pure Organic Brown Teff" ? 60 : 0;
  const totalPrice = (basePrice + extraInjeraPrice) * quantity;

  // Handle Add To Cart Action
  const handleAddToCart = () => {
    const customItem = {
      ...dish,
      selectedSpiceLevel: spiceLevel,
      selectedInjeraBase: injeraBase,
      quantity,
      finalPrice: totalPrice,
    };

    addToCart(customItem);

    // Show temporary visual confirmation
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fbf5ef] text-[#2c1a11] px-6 md:px-16 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-[#6e5e54] mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-[#6b1f0a] transition-colors">
          Home
        </Link>
        <span>›</span>
        <Link href="/menu" className="hover:text-[#6b1f0a] transition-colors">
          Menu
        </Link>
        <span>›</span>
        <span className="text-[#6b1f0a] font-semibold">
          {dish.category || "Specialty"}
        </span>
        <span>›</span>
        <span className="font-bold">{dish.nameEn || dish.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        {/* Left Column: Image Gallery & Heritage Cards */}
        <div className="space-y-6">
          <div className="relative rounded-2xl overflow-hidden bg-[#f1e2d5] h-96 shadow-md border border-[#f0e2d3]">
            <Image
              src={dish.image || "/og/kitfo.jpg"}
              alt={dish.nameEn || dish.name}
              fill
              className="object-cover"
              priority
            />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#6b1f0a] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                HOUSE SIGNATURE
              </span>
              <span className="bg-[#183e2b] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                100% TEFF OPTION
              </span>
            </div>
            <span className="absolute bottom-4 left-4 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm">
              ⏱️ Simmered 14 Hours
            </span>
          </div>

          {/* Heritage Card */}
          <div className="bg-[#f4e7da] p-6 rounded-2xl border border-[#e5d5c5]">
            <span className="text-[10px] font-bold text-[#8c6820] tracking-widest uppercase block mb-1">
              HERITAGE & LINEAGE · The Crown Jewel
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#6b1f0a] mb-2">
              Royal Feast of the Highlands
            </h3>
            <p className="text-[#6e5e54] text-xs leading-relaxed mb-6">
              {dish.description ||
                "Traditionally reserved for festive holidays such as Fasika and Enkutatash. Every pot demands simmering with hand-chopped sweet red onions without a single drop of water, patiently reduced for half a day with our hand-milled berbere spice blend and niter kibbeh."}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e5d5c5] text-center">
              <div>
                <span className="text-[10px] uppercase text-[#6e5e54] block">
                  PREPARATION
                </span>
                <strong className="text-xs font-bold text-[#2c1a11]">
                  Slow Stewed
                </strong>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#6e5e54] block">
                  ORIGIN
                </span>
                <strong className="text-xs font-bold text-[#2c1a11]">
                  Highland Shewa
                </strong>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#6e5e54] block">
                  ALLERGENS
                </span>
                <strong className="text-xs font-bold text-[#2c1a11]">
                  Poultry, Butter
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dish Info & Configurator */}
        <div className="bg-white p-8 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="font-serif text-3xl font-bold text-[#2c1a11]">
                {dish.nameEn || dish.name}
              </h1>
              <p className="text-xs text-[#6e5e54] mt-1">
                {dish.description ||
                  "Tender slow-braised free-range chicken drumstick and thigh infused with aromatic Ethiopian berbere, niter kibbeh, and a whole simmered seasoned farm egg."}
              </p>
            </div>
            <div className="bg-[#f4e7da] text-[#6b1f0a] font-bold text-xl px-4 py-2 rounded-xl border border-[#e5d5c5] whitespace-nowrap">
              ETB {basePrice}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[11px] text-[#6e5e54] pt-4 border-t border-gray-100">
            <div>👥 Serves 1–2 generously</div>
            <div>🌾 Unlimited table injera refill</div>
            <div>✅ Taxes Included</div>
          </div>

          {/* Interactive Option 1: Heat & Spice Level Selection */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-[#2c1a11] block">
              1. Heat & Spice Level 🔥{" "}
              <span className="text-red-500">*Required</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "Mild", label: "Mild", sub: "Alicha touch" },
                { id: "Traditional", label: "Traditional", sub: "Recommended" },
                {
                  id: "Fiery Awaze",
                  label: "Fiery Awaze",
                  sub: "Extra mitmita",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSpiceLevel(item.id)}
                  className={`p-3 rounded-xl text-left cursor-pointer transition-all ${
                    spiceLevel === item.id
                      ? "border-2 border-[#6b1f0a] bg-[#f4e7da]"
                      : "border border-[#e5d5c5] hover:border-[#6b1f0a] bg-white"
                  }`}
                >
                  <strong
                    className={`block text-xs ${
                      spiceLevel === item.id
                        ? "text-[#6b1f0a]"
                        : "text-[#2c1a11]"
                    }`}
                  >
                    {item.label}
                  </strong>
                  <span
                    className={`text-[10px] ${
                      spiceLevel === item.id
                        ? "text-[#8c6820]"
                        : "text-[#6e5e54]"
                    }`}
                  >
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Option 2: Injera Base Choice */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-[#2c1a11] block">
              2. Traditional Injera Base 🫓{" "}
              <span className="text-gray-400 font-normal">Choose 1</span>
            </label>
            <div className="space-y-2">
              {[
                {
                  id: "Standard",
                  title: "Standard Teff & Barley Blend",
                  desc: "Spongy, tart sourdough",
                  priceText: "Included",
                },
                {
                  id: "100% Pure Organic Brown Teff",
                  title: "100% Pure Organic Brown Teff",
                  desc: "Gluten-free, iron-rich",
                  priceText: "+ETB 60",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setInjeraBase(item.id)}
                  className={`w-full p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                    injeraBase === item.id
                      ? "border-2 border-[#6b1f0a] bg-[#6b1f0a] text-white"
                      : "border-[#e5d5c5] bg-white text-[#2c1a11] hover:border-[#6b1f0a]"
                  }`}
                >
                  <div className="text-left">
                    <strong className="block text-xs">{item.title}</strong>
                    <span
                      className={`text-[10px] ${
                        injeraBase === item.id
                          ? "text-white/80"
                          : "text-[#6e5e54]"
                      }`}
                    >
                      {item.desc}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-bold ${
                      injeraBase === item.id ? "text-white" : "text-[#6b1f0a]"
                    }`}
                  >
                    {item.priceText}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Controls: Quantity & Add To Cart Button */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center justify-between border border-[#e5d5c5] rounded-xl bg-[#f4e7da] p-1">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-2 text-xs font-bold text-[#6b1f0a] hover:bg-white/50 rounded-lg cursor-pointer"
              >
                -
              </button>
              <span className="px-4 text-xs font-bold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-2 text-xs font-bold text-[#6b1f0a] hover:bg-white/50 rounded-lg cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 bg-[#6b1f0a] hover:bg-[#521707] active:scale-[0.99] text-white text-xs font-bold py-3.5 rounded-xl shadow-sm transition-all flex justify-center items-center gap-2 cursor-pointer"
            >
              <span>
                {addedNotice ? "✓ Added to Order!" : "🛒 Add to Order"}
              </span>
              <span>•</span>
              <span>ETB {totalPrice}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
