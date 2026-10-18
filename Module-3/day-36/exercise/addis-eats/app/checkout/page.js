"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../providers";
import {
  createOrderAction,
  cancelOrderAction,
} from "@/app/actions/orderActions";

const initialState = {
  success: false,
  message: "",
  fieldErrors: {},
};

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("telebirr");

  // React 19 / Next.js useActionState hook handling pending state and state updates
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      // Append selected payment method to form data
      formData.append("paymentMethod", paymentMethod);
      const res = await createOrderAction(prevState, formData);
      if (res.success) {
        clearCart();
      }
      return res;
    },
    initialState,
  );

  // Helper handler to test cancelOrderAction ownership authorization
  const handleCancel = async () => {
    const result = await cancelOrderAction("ORD-12345", "USER-CURRENT-ID");
    alert(result.message || result.error);
  };

  // Subtotal & Calculations
  const itemsSubtotal = cart.reduce((sum, item) => {
    const unitPrice = Number(
      item.priceETB || item.price || item.finalPrice || 0,
    );
    return sum + unitPrice * item.quantity;
  }, 0);

  const expressDeliveryFee = itemsSubtotal > 0 ? 155 : 0;
  const vatTax = Math.round(itemsSubtotal * 0.15);
  const grandTotal = itemsSubtotal + expressDeliveryFee + vatTax;

  return (
    <div className="max-w-7xl mx-auto">
      {state.success ? (
        /* Order Success Card */
        <div className="bg-white rounded-2xl p-10 border border-[#38b2ac] shadow-md max-w-2xl mx-auto text-center space-y-4">
          <div className="text-4xl">🎉</div>
          <h2 className="font-serif text-3xl font-bold text-[#6b1f0a]">
            {state.message || "Order Confirmed!"}
          </h2>
          <p className="text-sm text-[#6e5e54]">
            Your order has been sent to our kitchen. Track your live delivery
            status via SMS.
          </p>
          <div className="bg-[#f4e7da] p-4 rounded-xl border border-[#e5d5c5] inline-block font-mono text-sm font-bold text-[#6b1f0a]">
            Order ID: {state.orderId || "ORD-98421"}
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/menu"
              className="bg-[#6b1f0a] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#521707] transition-colors"
            >
              Return to Menu
            </Link>
            <button
              onClick={handleCancel}
              className="bg-white border border-[#e5d5c5] text-[#2c1a11] text-xs font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Test Cancel Order
            </button>
          </div>
        </div>
      ) : (
        /* Two-Column Checkout Form */
        <form
          action={formAction}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Hidden input passing cart items JSON */}
          <input type="hidden" name="items" value={JSON.stringify(cart)} />

          {/* Left Column: Guest Info, Address & Payment */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Contact & Guest Details */}
            <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h2 className="font-serif text-lg font-bold text-[#2c1a11] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#f4e7da] text-[#6b1f0a] text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  Contact & Guest Details
                </h2>
                <span className="text-[10px] font-bold text-[#8c6820] bg-[#f4e7da] px-2.5 py-0.5 rounded uppercase">
                  Habesha Hospitality
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e5e54] block mb-1">
                    RECIPIENT NAME
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    placeholder="Abebe Bikila"
                    className="w-full bg-[#fbf5ef] text-xs p-3 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a]"
                  />
                  {state.fieldErrors?.customerName && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {state.fieldErrors.customerName[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e5e54] block mb-1">
                    PHONE (CALLS & TELEGRAM SMS)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#6e5e54]">
                      🇪🇹 +251
                    </span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="911 45 7890"
                      className="w-full bg-[#fbf5ef] text-xs p-3 pl-16 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a]"
                    />
                  </div>
                  {state.fieldErrors?.phone && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {state.fieldErrors.phone[0]}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e5e54] block mb-1">
                  EMAIL FOR DIGITAL RECEIPT
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="abebe.b@example.com"
                  className="w-full bg-[#fbf5ef] text-xs p-3 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a]"
                />
              </div>
            </div>

            {/* 2. Delivery Location in Addis Ababa */}
            <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h2 className="font-serif text-lg font-bold text-[#2c1a11] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#f4e7da] text-[#6b1f0a] text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  Delivery Location in Addis Ababa
                </h2>
                <span className="text-[10px] font-bold text-[#183e2b] bg-[#e2f0e8] px-2.5 py-0.5 rounded uppercase">
                  Insulated Mesob Carrier
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e5e54] block mb-1">
                    SUB-CITY / NEIGHBORHOOD
                  </label>
                  <select
                    name="subcity"
                    className="w-full bg-[#fbf5ef] text-xs p-3 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a]"
                  >
                    <option>Bole Medhanialem (Near Mesob House)</option>
                    <option>Kazanchis / ECA Area</option>
                    <option>Sarbet / Old Airport</option>
                    <option>Piassa / Arat Kilo</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e5e54] block mb-1">
                    STREET, BUILDING, FLAT NO.
                  </label>
                  <input
                    type="text"
                    name="addressDetails"
                    placeholder="Behind Edna Mall, House No. 402, 3rd Floor"
                    className="w-full bg-[#fbf5ef] text-xs p-3 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e5e54] block mb-1">
                  SPECIFIC LANDMARK / GATE INSTRUCTIONS
                </label>
                <textarea
                  name="address"
                  rows={2}
                  placeholder="Opposite Boston Day Spa, entrance through dark green gate..."
                  className="w-full bg-[#fbf5ef] text-xs p-3 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a]"
                />
                {state.fieldErrors?.address && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {state.fieldErrors.address[0]}
                  </p>
                )}
              </div>

              {/* Dispatch Timing Options */}
              <div className="pt-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#6e5e54] block mb-2">
                  DESIRED DISPATCH TIMING
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="p-3 rounded-xl border-2 border-[#6b1f0a] bg-[#f4e7da] flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="timing"
                      defaultChecked
                      className="accent-[#6b1f0a]"
                    />
                    <div className="text-xs">
                      <strong className="block text-[#6b1f0a]">
                        Immediate Dispatch
                      </strong>
                      <span className="text-[10px] text-[#8c6820]">
                        Fresh & hot (Clay stew) ~35-45 min
                      </span>
                    </div>
                  </label>

                  <label className="p-3 rounded-xl border border-[#e5d5c5] bg-white flex items-center gap-3 cursor-pointer hover:border-[#6b1f0a]">
                    <input
                      type="radio"
                      name="timing"
                      className="accent-[#6b1f0a]"
                    />
                    <div className="text-xs">
                      <strong className="block text-[#2c1a11]">
                        Schedule for Dinner
                      </strong>
                      <span className="text-[10px] text-[#6e5e54]">
                        Set for evening feast (e.g., 7:30 PM)
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h2 className="font-serif text-lg font-bold text-[#2c1a11] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#f4e7da] text-[#6b1f0a] text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  Payment Method
                </h2>
                <span className="text-[10px] text-[#6e5e54]">
                  Encrypted & Direct
                </span>
              </div>

              <div className="space-y-3">
                {/* Telebirr Option */}
                <div
                  onClick={() => setPaymentMethod("telebirr")}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "telebirr"
                      ? "border-2 border-[#6b1f0a] bg-[#f4e7da]"
                      : "border-[#e5d5c5] bg-white"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-[#6b1f0a] flex items-center justify-center">
                        {paymentMethod === "telebirr" && (
                          <span className="w-2 h-2 rounded-full bg-[#6b1f0a]" />
                        )}
                      </span>
                      <strong className="text-xs font-bold text-[#2c1a11]">
                        Telebirr (ቴሌብር)
                      </strong>
                      <span className="bg-[#f59e0b] text-white text-[9px] font-bold px-2 py-0.5 rounded">
                        Popular
                      </span>
                    </div>
                    <span className="text-xs">📲</span>
                  </div>
                  <p className="text-[11px] text-[#6e5e54] pl-6">
                    Instant SuperApp QR prompt or USSD confirmation.
                  </p>

                  {paymentMethod === "telebirr" && (
                    <div className="mt-3 ml-6 bg-white p-3 rounded-lg border border-[#e5d5c5] flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded border flex items-center justify-center text-lg font-mono">
                        ▣
                      </div>
                      <div className="text-xs flex-1">
                        <strong>Telebirr Quick Merchant Pay</strong>
                        <p className="text-[10px] text-[#6e5e54]">
                          Merchant ID: MESOB-7761. Enter your registered phone
                          number.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CBE Birr */}
                <div
                  onClick={() => setPaymentMethod("cbe")}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "cbe"
                      ? "border-2 border-[#6b1f0a] bg-[#f4e7da]"
                      : "border-[#e5d5c5] bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                        {paymentMethod === "cbe" && (
                          <span className="w-2 h-2 rounded-full bg-[#6b1f0a]" />
                        )}
                      </span>
                      <strong className="text-xs text-[#2c1a11]">
                        CBE Birr / CBE Mobile Banking
                      </strong>
                    </div>
                    <span>🏦</span>
                  </div>
                </div>

                {/* Cash/Card on Delivery */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-2 border-[#6b1f0a] bg-[#f4e7da]"
                      : "border-[#e5d5c5] bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                        {paymentMethod === "cod" && (
                          <span className="w-2 h-2 rounded-full bg-[#6b1f0a]" />
                        )}
                      </span>
                      <strong className="text-xs text-[#2c1a11]">
                        Cash or Card on Delivery
                      </strong>
                    </div>
                    <span>💳</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mesob House Promise */}
            <div className="bg-[#f6ebd0] p-4 rounded-xl border border-[#eedecf] flex items-center gap-3 text-xs text-[#2c1a11]">
              <span className="text-lg">📜</span>
              <div>
                <strong>The Mesob House Promise:</strong> Each communal platter
                arrives with four warm rolls of authentic 100% pure teff injera,
                warm wet towels, and our hand-blended Mitmita spice on the side.
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary Sidebar */}
          <div className="lg:col-span-5 space-y-6 sticky top-8">
            <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-5">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <span className="text-[10px] font-bold text-[#8c6820] tracking-wider uppercase block">
                    HABESHA FEAST
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#2c1a11]">
                    Order Summary
                  </h3>
                </div>
                <Link
                  href="/cart"
                  className="text-xs text-[#6b1f0a] hover:underline font-semibold"
                >
                  Edit Cart
                </Link>
              </div>

              {/* Cart Items List Preview */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-4">
                    No items in cart
                  </p>
                ) : (
                  cart.map((item) => {
                    const unitPrice = Number(
                      item.priceETB || item.price || item.finalPrice || 0,
                    );
                    return (
                      <div
                        key={item._id || item.id}
                        className="flex justify-between items-center gap-3 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 relative rounded-lg overflow-hidden bg-[#f1e2d5] shrink-0">
                            <Image
                              src={item.image || "/og/kitfo.jpg"}
                              alt={item.nameEn || item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <strong className="block text-[#2c1a11]">
                              {item.nameEn || item.name}
                            </strong>
                            <span className="text-[10px] text-[#6e5e54]">
                              Qty: {item.quantity}
                            </span>
                          </div>
                        </div>
                        <span className="font-bold text-[#6b1f0a]">
                          ETB {unitPrice * item.quantity}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Delivery Zone Badge */}
              <div className="bg-[#fbf5ef] p-3 rounded-xl border border-[#e5d5c5] flex justify-between items-center text-xs">
                <div>
                  <span className="text-[10px] uppercase text-[#6e5e54] block">
                    DELIVERING TO
                  </span>
                  <strong className="text-[#2c1a11]">
                    Bole Sub-city, Edna Mall area
                  </strong>
                </div>
                <span className="text-[10px] font-bold text-[#183e2b] bg-[#e2f0e8] px-2 py-0.5 rounded">
                  ● Active Corridor
                </span>
              </div>

              {/* Ledger Breakdown */}
              <div className="space-y-2 text-xs border-t border-gray-100 pt-3">
                <div className="flex justify-between text-[#6e5e54]">
                  <span>Items Subtotal</span>
                  <strong className="text-[#2c1a11]">
                    ETB {itemsSubtotal}
                  </strong>
                </div>
                <div className="flex justify-between text-[#6e5e54]">
                  <span>Express Delivery (Bole Radius)</span>
                  <strong className="text-[#2c1a11]">
                    ETB {expressDeliveryFee}
                  </strong>
                </div>
                <div className="flex justify-between text-[#6e5e54]">
                  <span>Complimentary Injera (4 Rolls)</span>
                  <strong className="text-[#183e2b]">INCLUDED</strong>
                </div>
                <div className="flex justify-between text-[#6e5e54]">
                  <span>Clay Stew Thermal Packaging</span>
                  <strong className="text-[#183e2b]">FREE</strong>
                </div>
              </div>

              {/* Grand Total Block */}
              <div className="bg-[#f4e7da] p-4 rounded-xl border border-[#e5d5c5] flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8c6820] tracking-wider block">
                    TOTAL AMOUNT DUE
                  </span>
                  <strong className="font-serif text-2xl font-bold text-[#6b1f0a]">
                    Grand Total
                  </strong>
                </div>
                <div className="text-right">
                  <div className="font-serif text-2xl font-bold text-[#6b1f0a]">
                    ETB {grandTotal}
                  </div>
                  <span className="text-[10px] text-[#6e5e54]">
                    VAT inclusive
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending || cart.length === 0}
                className="w-full bg-[#6b1f0a] hover:bg-[#521707] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold py-3.5 rounded-xl shadow-sm transition-colors flex justify-center items-center gap-2 cursor-pointer"
              >
                <span>
                  {isPending
                    ? "Submitting Order..."
                    : `Confirm Order & Pay ETB ${grandTotal}`}
                </span>
              </button>

              <div className="text-center text-[11px] text-[#6e5e54] flex justify-center gap-4">
                <Link href="/cart" className="hover:underline">
                  ← Return to Cart
                </Link>
                <span>•</span>
                <Link href="/menu" className="hover:underline">
                  + Add More Dishes
                </Link>
              </div>
            </div>

            {/* Phone Support Callout */}
            <div className="bg-[#f4e7da] p-4 rounded-2xl border border-[#e5d5c5] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8c6820] text-white flex items-center justify-center text-sm">
                  📞
                </div>
                <div className="text-xs">
                  <strong className="block text-[#2c1a11]">
                    Need Phone Support?
                  </strong>
                  <span className="text-[10px] text-[#6e5e54]">
                    Direct Kitchen desk: +251 911 234 567
                  </span>
                </div>
              </div>
              <a
                href="tel:+251911234567"
                className="bg-white text-[#2c1a11] text-[10px] font-bold px-3 py-1.5 rounded-lg border border-[#e5d5c5] hover:bg-gray-50"
              >
                Call Now
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
