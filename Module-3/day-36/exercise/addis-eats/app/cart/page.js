"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../providers";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Price calculations
  const itemsSubtotal = cart.reduce((sum, item) => {
    const itemPrice = Number(
      item.priceETB || item.price || item.finalPrice || 0,
    );
    const qty = Number(item.quantity || 1);
    return sum + itemPrice * qty;
  }, 0);

  const teffUpgradeFee = 60;
  const clayPakFee = 40;
  const vatTax = Math.round(itemsSubtotal * 0.15);
  const discount = itemsSubtotal > 0 ? 200 : 0;

  const grandTotal =
    itemsSubtotal + teffUpgradeFee + clayPakFee + vatTax - discount;

  return (
    <div>
      {cart.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-[#f0e2d3] text-center max-w-2xl mx-auto space-y-4">
          <div className="text-4xl">🧺</div>
          <h2 className="font-serif text-2xl font-bold text-[#6b1f0a]">
            Your Gursha Basket is Empty
          </h2>
          <p className="text-xs text-[#6e5e54]">
            Explore our highland stews, fresh injera platters, and house tej to
            begin your feast.
          </p>
          <div className="pt-2">
            <Link
              href="/menu"
              className="inline-block bg-[#6b1f0a] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#521707] transition-colors"
            >
              ← Return to Menu
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Column: Cart Items List & Options */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header with Clear Button */}
            <div className="flex justify-between items-center border-b border-[#e5d5c5] pb-3">
              <h2 className="font-serif text-xl font-bold text-[#2c1a11]">
                Clay Pot Stews & Provisions{" "}
                <span className="text-xs font-normal text-[#6e5e54]">
                  ({cart.length} handcrafted selection
                  {cart.length > 1 ? "s" : ""})
                </span>
              </h2>
              <button
                onClick={clearCart}
                className="text-xs text-[#6e5e54] hover:text-[#6b1f0a] flex items-center gap-1 cursor-pointer"
              >
                🔄 Clear Table
              </button>
            </div>

            {/* Cart Items List */}
            <div className="space-y-4">
              {cart.map((item) => {
                const itemId = item._id || item.id;
                const unitPrice = Number(
                  item.priceETB || item.price || item.finalPrice || 0,
                );

                return (
                  <div
                    key={itemId}
                    className="bg-white p-4 rounded-2xl border border-[#f0e2d3] shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  >
                    {/* Item Thumbnail & Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-[#f1e2d5] shrink-0">
                        <Image
                          src={item.image || "/og/kitfo.jpg"}
                          alt={item.nameEn || item.name || "Dish"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex gap-2 mb-1">
                          <span className="bg-[#f4e7da] text-[#8c6820] text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                            {item.tag || item.category || "HERITAGE FEAST"}
                          </span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-[#2c1a11]">
                          {item.nameEn || item.name}
                        </h3>
                        <p className="text-[11px] text-[#6e5e54] line-clamp-1 mt-0.5 max-w-xs">
                          {item.description ||
                            "Slow-simmered highland stew served with warm teff injera rolls."}
                        </p>
                      </div>
                    </div>

                    {/* Price, Quantity Controls & Delete */}
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                      <div className="text-right">
                        <span className="font-bold text-sm text-[#6b1f0a] block">
                          ETB {unitPrice * item.quantity}
                        </span>
                        <span className="text-[10px] text-[#6e5e54]">
                          {unitPrice} ETB each
                        </span>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center border border-[#e5d5c5] rounded-xl bg-[#f4e7da] p-0.5">
                        <button
                          onClick={() => updateQuantity(itemId, -1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#6b1f0a] hover:bg-white/60 rounded-lg cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-[#2c1a11]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(itemId, 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#6b1f0a] hover:bg-white/60 rounded-lg cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(itemId)}
                        className="text-gray-400 hover:text-red-500 text-sm p-1 cursor-pointer transition-colors"
                        title="Remove item"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gursha Hospitality & Dining Etiquette Options */}
            <div className="bg-[#f4e7da] p-6 rounded-2xl border border-[#e5d5c5] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#6b1f0a]">
                <span>🌾</span> Gursha Hospitality & Dining Etiquette
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="bg-white p-4 rounded-xl border border-[#e5d5c5] flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 accent-[#6b1f0a]"
                  />
                  <div className="text-xs">
                    <strong className="block text-[#2c1a11]">
                      Include Traditional Handwash Basin
                    </strong>
                    <span className="text-[10px] text-[#6e5e54]">
                      Scented warm lemon towels and hand-rinsing urn
                      presentation
                    </span>
                  </div>
                </label>

                <label className="bg-white p-4 rounded-xl border border-[#e5d5c5] flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 accent-[#6b1f0a]"
                  />
                  <div className="text-xs">
                    <strong className="block text-[#2c1a11]">
                      No Cutlery Needed (True Gursha)
                    </strong>
                    <span className="text-[10px] text-[#6e5e54]">
                      We embrace the communal joy of eating with fresh Injera
                      rolls
                    </span>
                  </div>
                </label>
              </div>

              {/* Special Instructions Note */}
              <div className="pt-2">
                <label className="text-[11px] font-bold text-[#2c1a11] block mb-1">
                  Kitchen Chef Note / Injera Separation Preference{" "}
                  <span className="text-gray-400 font-normal">Optional</span>
                </label>
                <input
                  type="text"
                  placeholder="E.g., Please wrap extra Teff rolls in heat-retaining gold foil separately from the Doro Wat pot..."
                  className="w-full bg-white text-xs p-3 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Meaning of Gursha Footer Card */}
            <div className="bg-[#f6ebd0] p-4 rounded-xl border border-[#eedecf] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#8c6820] text-white flex items-center justify-center text-sm shrink-0">
                💛
              </div>
              <div className="text-xs text-[#2c1a11]">
                <strong>The Meaning of Gursha (ጉርሻ):</strong> In Habesha dining
                culture, placing a savory morsel directly into a companion's
                mouth with love cements friendship and shared celebration.
              </div>
            </div>
          </div>

          {/* Right Column: Basket Ledger Summary */}
          <div className="lg:col-span-5 space-y-6 sticky top-8">
            <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-5">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-serif text-xl font-bold text-[#2c1a11]">
                  Basket Ledger
                </h3>
                <span className="text-[10px] font-bold bg-[#f4e7da] text-[#8c6820] px-2 py-0.5 rounded uppercase">
                  Birr (ETB)
                </span>
              </div>

              {/* Line Items */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-[#6e5e54]">
                  <span>Items Subtotal ({cart.length} items)</span>
                  <strong className="text-[#2c1a11]">
                    ETB {itemsSubtotal}
                  </strong>
                </div>

                <div className="flex justify-between text-[#6e5e54]">
                  <span>100% Teff Injera Upgrade</span>
                  <strong className="text-[#2c1a11]">
                    ETB {teffUpgradeFee}
                  </strong>
                </div>

                <div className="flex justify-between text-[#6e5e54]">
                  <span>Insulated Traditional Clay-Pak</span>
                  <strong className="text-[#2c1a11]">ETB {clayPakFee}</strong>
                </div>

                <div className="flex justify-between text-[#6e5e54]">
                  <span className="flex items-center gap-1">
                    🚚 Delivery Fee{" "}
                    <span className="text-[10px] text-[#183e2b] font-bold">
                      (Bole Zone)
                    </span>
                  </span>
                  <strong className="text-[#183e2b]">FREE</strong>
                </div>

                <div className="flex justify-between text-[#6e5e54]">
                  <span>City VAT & Tourism Levy (15%)</span>
                  <strong className="text-[#2c1a11]">ETB {vatTax}</strong>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between bg-[#f4e7da] p-2.5 rounded-lg text-[#8c6820] font-bold">
                    <span>🏷️ GURSHA2025 APPLIED</span>
                    <span>- ETB {discount}</span>
                  </div>
                )}
              </div>

              {/* Coupon Code Input */}
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Have another coupon code?"
                  className="flex-1 bg-[#fbf5ef] text-xs p-2.5 rounded-lg border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a]"
                />
                <button className="bg-[#f4e7da] hover:bg-[#e9d9c8] text-[#2c1a11] text-xs font-bold px-4 py-2.5 rounded-lg border border-[#e5d5c5]">
                  Apply
                </button>
              </div>

              {/* Grand Total Highlight */}
              <div className="bg-[#f4e7da] p-4 rounded-xl border border-[#e5d5c5] flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8c6820] tracking-wider block">
                    GRAND TOTAL
                  </span>
                  <span className="text-[10px] text-[#6e5e54]">
                    Taxes included
                  </span>
                </div>
                <strong className="font-serif text-2xl font-bold text-[#6b1f0a]">
                  ETB {grandTotal}
                </strong>
              </div>

              {/* Proceed to Checkout Button */}
              <Link
                href="/checkout"
                className="w-full bg-[#6b1f0a] hover:bg-[#521707] text-white text-xs font-bold py-3.5 rounded-xl shadow-sm transition-colors flex justify-center items-center gap-2"
              >
                <span>Proceed to Delivery Checkout</span>
                <span>→</span>
              </Link>

              <div className="text-center">
                <Link
                  href="/menu"
                  className="text-[11px] text-[#6e5e54] hover:text-[#6b1f0a] underline"
                >
                  ✖ Explore more dishes from our Menu
                </Link>
              </div>

              {/* Delivery Guarantees */}
              <div className="border-t border-gray-100 pt-4 space-y-2 text-[11px] text-[#6e5e54]">
                <div className="flex items-center gap-2">
                  <span>🧺</span> Piping Warm Delivery in woven Mesob packaging
                </div>
                <div className="flex items-center gap-2">
                  <span>💳</span> Telebirr, CBE Birr, Cash & Card on delivery
                </div>
                <div className="flex items-center gap-2">
                  <span>🔒</span> Encrypted checkout & real-time dispatcher SMS
                </div>
              </div>
            </div>

            {/* Fresh Jebena Buna Upsell Card */}
            <div className="bg-[#f4e7da] p-5 rounded-2xl border border-[#e5d5c5] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#183e2b] text-white flex items-center justify-center text-lg shrink-0">
                ☕
              </div>
              <div className="flex-1 text-xs">
                <strong className="block text-[#2c1a11]">
                  Adding Fresh Jebena Buna?
                </strong>
                <p className="text-[11px] text-[#6e5e54] mt-0.5">
                  Complement your feast with ritual roasted coffee beans and
                  frankincense.
                </p>
                <Link
                  href="/menu?category=beverages"
                  className="text-[10px] font-bold text-[#6b1f0a] hover:underline uppercase block mt-1"
                >
                  ADD TO ORDER →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
