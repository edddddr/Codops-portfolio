"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signInAction } from "@/app/actions/authActions";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const nextParam = searchParams.get("next") || "/";

  // Open Redirect Protection Check
  const isBadRedirect =
    !nextParam.startsWith("/") || nextParam.startsWith("//");

  const [state, formAction, isPending] = useActionState(signInAction, null);

  return (
    <div className="min-h-screen bg-[#fbf5ef] text-[#2c1a11] px-6 md:px-16 py-10">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-[#6e5e54] mb-8 flex items-center gap-2 max-w-6xl mx-auto">
        <Link href="/" className="hover:text-[#6b1f0a]">
          Account
        </Link>
        <span>/</span>
        <span className="font-bold text-[#6b1f0a]">
          Sign In to Mesob Family
        </span>
      </nav>

      {/* Main Two-Column Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Column: Member Circle & Benefits Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#f4e7da] p-8 rounded-2xl border border-[#e5d5c5] space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#8c6820] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              ★ MEMBER CIRCLE
            </div>

            <h1 className="font-serif text-3xl font-bold text-[#6b1f0a] leading-tight">
              Welcome Back to the Table
            </h1>

            <p className="text-xs text-[#6e5e54] leading-relaxed">
              Immerse yourself in authentic highland hospitality, where every
              shared meal honors community, connection, and craft.
            </p>

            {/* Benefit Items */}
            <div className="space-y-4 pt-2 border-t border-[#e5d5c5]">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#e2d2c1] text-[#6b1f0a] flex items-center justify-center text-sm shrink-0">
                  🎁
                </div>
                <div className="text-xs">
                  <strong className="block text-[#2c1a11]">
                    Welcome Gift: Pure Tej or Buna
                  </strong>
                  <p className="text-[11px] text-[#6e5e54] mt-0.5">
                    Enjoy a complimentary flask of house-fermented Tej or a
                    personalized Jebena Buna coffee ceremony with your inaugural
                    banquet booking.
                  </p>
                </div>
              </div>

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

        {/* Right Column: Sign In Form Box */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-6">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a11]">
              Sign In to Your Account
            </h2>
            <p className="text-xs text-[#6e5e54] mt-1">
              Access your saved Mesob preferences, rewards points, and order
              history.
            </p>
          </div>

          {/* Social Quick Sign-In Buttons */}
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
              Or sign in with your email details
            </span>
          </div>

          {/* Destination Notice */}
          <div className="bg-[#fbf5ef] p-3 rounded-xl border border-[#e5d5c5] text-xs text-[#6e5e54] flex justify-between items-center">
            <span>Destination after login:</span>
            <code className="font-mono text-[#6b1f0a] font-bold text-[11px]">
              {isBadRedirect ? "/ (rejected malicious link)" : nextParam}
            </code>
          </div>

          {/* Server Action Error Alert */}
          {state?.error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-xs font-semibold">
              ⚠️ {state.error}
            </div>
          )}

          {/* Sign In Form */}
          <form action={formAction} className="space-y-4 pt-2">
            {/* Hidden Input passing return destination */}
            <input type="hidden" name="next" value={nextParam} />

            {/* Email Field */}
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
                  placeholder="e.g. customer@example.com or staff@example.com"
                  required
                  className="w-full bg-[#fbf5ef] text-xs p-3 pl-10 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-[#2c1a11] block">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[10px] font-semibold text-[#6b1f0a] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                  🔒
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your account password"
                  required
                  className="w-full bg-[#fbf5ef] text-xs p-3 pl-10 rounded-xl border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#6b1f0a] hover:bg-[#521707] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold py-3.5 rounded-xl shadow-sm transition-colors cursor-pointer mt-4"
            >
              {isPending ? "Signing in..." : "Sign In & Access Table →"}
            </button>
          </form>

          {/* Register Link Footer */}
          <div className="text-center pt-4 border-t border-gray-100 text-xs text-[#6e5e54]">
            Don't have a Mesob House account?{" "}
            <Link
              href="/register"
              className="font-bold text-[#6b1f0a] hover:underline"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
