"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerAction } from "@/app/actions/authActions";

const initialState = {
  success: false,
  message: "",
  fieldErrors: {},
};

export default function RegisterPage() {
  const router = useRouter();

  // React 19 / Next.js useActionState hook
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const res = await registerAction(prevState, formData);
      if (res.success) {
        setTimeout(() => router.push("/menu"), 1000);
      }
      return res;
    },
    initialState,
  );

  return (
    <div className="min-h-screen bg-[#fbf5ef] text-[#2c1a11] px-6 md:px-16 py-10">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-[#6e5e54] mb-8 flex items-center gap-2 max-w-6xl mx-auto">
        <Link href="/" className="hover:text-[#6b1f0a]">
          Account
        </Link>
        <span>/</span>
        <span className="font-bold text-[#6b1f0a]">Join the Mesob Family</span>
      </nav>

      {/* Main Two-Column Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Column: Member Circle Perks */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#f4e7da] p-8 rounded-2xl border border-[#e5d5c5] space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#8c6820] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              ★ MEMBER CIRCLE
            </div>

            <h1 className="font-serif text-3xl font-bold text-[#6b1f0a] leading-tight">
              Become an Honored Table Guest
            </h1>

            <p className="text-xs text-[#6e5e54] leading-relaxed">
              Immerse yourself in authentic highland hospitality, where every
              shared meal honors community, connection, and craft.
            </p>

            {/* Welcome Gift Highlight */}
            <div className="bg-white p-4 rounded-xl border border-[#e5d5c5] flex gap-3 items-start">
              <div className="w-9 h-9 rounded-lg bg-[#f4e7da] text-[#6b1f0a] flex items-center justify-center text-base shrink-0">
                🍷
              </div>
              <div className="text-xs">
                <strong className="block text-[#2c1a11]">
                  Welcome Gift: Pure Tej or Buna
                </strong>
                <p className="text-[11px] text-[#6e5e54] mt-0.5">
                  Enjoy a complimentary flask of house-fermented Tej (pure honey
                  wine) or a personalized Jebena Buna coffee ceremony with your
                  inaugural banquet booking.
                </p>
              </div>
            </div>

            {/* Perks Bullet List */}
            <div className="space-y-4 pt-2 border-t border-[#e5d5c5]">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#e2d2c1] text-[#6b1f0a] flex items-center justify-center text-sm shrink-0">
                  🎖️
                </div>
                <div className="text-xs">
                  <strong className="block text-[#2c1a11]">
                    Communal Gursha Points
                  </strong>
                  <p className="text-[11px] text-[#6e5e54] mt-0.5">
                    Earn generous loyalty points redeemable for hand-poured pure
                    Teff injera, prime Siga Tibs, and bespoke banquet upgrades.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#e2d2c1] text-[#6b1f0a] flex items-center justify-center text-sm shrink-0">
                  🔔
                </div>
                <div className="text-xs">
                  <strong className="block text-[#2c1a11]">
                    Fasting Calendar Alerts
                  </strong>
                  <p className="text-[11px] text-[#6e5e54] mt-0.5">
                    Timely seasonal notifications for Tsom fasting periods,
                    Chef's Beyaynetu spreads, and lenten specialties.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#e2d2c1] text-[#6b1f0a] flex items-center justify-center text-sm shrink-0">
                  🚀
                </div>
                <div className="text-xs">
                  <strong className="block text-[#2c1a11]">
                    Express Addis Delivery
                  </strong>
                  <p className="text-[11px] text-[#6e5e54] mt-0.5">
                    Save Bole, Kazanchis, Old Airport, or Sarbet drop-offs for
                    fast clay-pot temperature delivery straight to your
                    doorstep.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#e2d2c1] text-[#6b1f0a] flex items-center justify-center text-sm shrink-0">
                  🪑
                </div>
                <div className="text-xs">
                  <strong className="block text-[#2c1a11]">
                    Priority Mesob Table Reservations
                  </strong>
                  <p className="text-[11px] text-[#6e5e54] mt-0.5">
                    Skip standard waitlists for weekend live Kirar acoustic sets
                    and evening green-coffee roasting ceremonies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Habesha Proverb Card */}
          <div className="bg-[#f6ebd0] p-5 rounded-2xl border border-[#eedecf] flex items-center gap-4">
            <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-[#f1e2d5] shrink-0">
              <img
                src="/og/kitfo.jpg"
                alt="Communal Feast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs text-[#2c1a11]">
              <span className="text-[10px] font-bold uppercase text-[#8c6820] tracking-wider block">
                TRADITION IN EVERY BITE
              </span>
              <p className="italic mt-0.5">
                "Sharing from the same mesob is the ancient covenant of love and
                trust."
              </p>
              <span className="text-[10px] text-[#6e5e54] block mt-1">
                — Habesha Proverb
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Registration Form Box */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-6">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a11]">
              Create Your Mesob House Account
            </h2>
            <p className="text-xs text-[#6e5e54] mt-1">
              Join our culinary heritage circle in less than a minute.
            </p>
          </div>

          {/* Social Quick Sign-Up Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              className="bg-[#fbf5ef] hover:bg-[#f4e7da] border border-[#e5d5c5] p-3 rounded-xl text-xs font-bold text-[#2c1a11] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>📱</span> Telebirr Quick Sign
            </button>
            <button
              type="button"
              className="bg-[#fbf5ef] hover:bg-[#f4e7da] border border-[#e5d5c5] p-3 rounded-xl text-xs font-bold text-[#2c1a11] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>🌐</span> Continue with Google
            </button>
          </div>

          <div className="relative flex items-center justify-center border-b border-gray-100 my-4">
            <span className="bg-white px-3 text-[11px] text-[#6e5e54] absolute">
              Or register with your details
            </span>
          </div>

          {/* Success Banner */}
          {state.success && (
            <div className="bg-[#e6fffa] border border-[#38b2ac] text-[#234e52] p-4 rounded-xl text-xs font-bold animate-fade-in flex items-center gap-2">
              <span>🎉</span>
              <span>
                {state.message || "Account created successfully!"} Redirecting
                to menu...
              </span>
            </div>
          )}

          {/* Registration Form */}
          <form action={formAction} className="space-y-4 pt-2">
            {/* Full Name Field */}
            <div>
              <label className="text-[11px] font-bold text-[#2c1a11] block mb-1">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                  👤
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Abebe Bikila or Genet Tadesse"
                  className="w-full bg-[#fbf5ef] text-xs p-3 pl-10 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a] placeholder:text-gray-400"
                />
              </div>
              {state.fieldErrors?.name && (
                <p className="text-red-500 text-[11px] mt-1">
                  {state.fieldErrors.name[0]}
                </p>
              )}
            </div>

            {/* Email Address Field */}
            <div>
              <label className="text-[11px] font-bold text-[#2c1a11] block mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                  ✉️
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="guest@mesobhouse.com"
                  className="w-full bg-[#fbf5ef] text-xs p-3 pl-10 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a] placeholder:text-gray-400"
                />
              </div>
              {state.fieldErrors?.email && (
                <p className="text-red-500 text-[11px] mt-1">
                  {state.fieldErrors.email[0]}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="text-[11px] font-bold text-[#2c1a11] block mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                  🔒
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Minimum 8 characters"
                  className="w-full bg-[#fbf5ef] text-xs p-3 pl-10 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a] placeholder:text-gray-400"
                />
              </div>
              {state.fieldErrors?.password && (
                <p className="text-red-500 text-[11px] mt-1">
                  {state.fieldErrors.password[0]}
                </p>
              )}
            </div>

            {/* Primary Dining Preferences (Optional Display) */}
            <div className="pt-2">
              <label className="text-[11px] font-bold text-[#2c1a11] block mb-1.5">
                Primary Dining Preference{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  type="button"
                  className="bg-[#6b1f0a] text-white px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                >
                  All Heritage Delicacies
                </button>
                <button
                  type="button"
                  className="bg-[#fbf5ef] text-[#2c1a11] border border-[#e5d5c5] px-3 py-1.5 rounded-lg text-[11px]"
                >
                  Fasting & Vegan (Tsom)
                </button>
                <button
                  type="button"
                  className="bg-[#fbf5ef] text-[#2c1a11] border border-[#e5d5c5] px-3 py-1.5 rounded-lg text-[11px]"
                >
                  Halal Certified Meat
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-2 text-[11px] text-[#6e5e54]">
              <input
                type="checkbox"
                required
                defaultChecked
                className="mt-0.5 accent-[#6b1f0a]"
              />
              <span>
                I agree to the{" "}
                <Link href="#" className="underline text-[#6b1f0a]">
                  Mesob House Hospitality Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline text-[#6b1f0a]">
                  Privacy Guidelines
                </Link>
                .
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#6b1f0a] hover:bg-[#521707] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold py-3.5 rounded-xl shadow-sm transition-colors cursor-pointer mt-4 flex justify-center items-center gap-2"
            >
              <span>
                {isPending
                  ? "Creating Account..."
                  : "Create Account & Receive Welcome Gursha"}
              </span>
              <span>→</span>
            </button>
          </form>

          {/* Sign In Link Footer */}
          <div className="text-center pt-4 border-t border-gray-100 text-xs text-[#6e5e54]">
            Already part of our dining family?{" "}
            <Link
              href="/signin"
              className="font-bold text-[#6b1f0a] hover:underline"
            >
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
