import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import { logoutAction } from "@/app/actions/authActions";

export const metadata = {
  title: {
    template: "%s · Mesob House",
    default: "Mesob House — Authentic Habesha Dining & Food Delivery",
  },
  metadataBase: new URL("https://addiseats.et"),
  openGraph: {
    title: "Mesob House · Authentic Ethiopian Cuisine",
    description: "Minced beef, mitmita, traditional stews, and fresh delivery.",
    images: ["/og/kitfo.jpg"],
    type: "website",
    locale: "en_ET",
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value;
  const userName = cookieStore.get("user_name")?.value;

  return (
    <html lang="en">
      <body className="bg-[#fbf5ef] text-[#2c1a11] min-h-screen flex flex-col">
        <Providers>
          {/* Header */}
          <header className="bg-[#fbf5ef] px-6 md:px-12 py-5 flex justify-between items-center border-b border-[#f0e2d3]">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold text-[#6b1f0a]">
                Mesob
              </span>
              <span className="font-serif text-2xl font-bold text-[#6b1f0a]">
                House
              </span>
            </Link>

            <nav className="flex items-center gap-7 text-sm font-medium">
              <Link
                href="/menu"
                className="hover:text-[#6b1f0a] transition-colors"
              >
                Menu
              </Link>
              {/* <Link
                href="/menu/featured"
                className="hover:text-[#6b1f0a] transition-colors"
              >
                Featured Dish
              </Link> */}
              <Link
                href="/cart"
                className="hover:text-[#6b1f0a] transition-colors"
              >
                Order & Cart
              </Link>
              <Link
                href="/checkout"
                className="hover:text-[#6b1f0a] transition-colors"
              >
                Delivery & Checkout
              </Link>

              {/* Dynamic Cart Badge Pill */}
              <Link
                href="/cart"
                className="flex items-center bg-[#f6e8dd] px-3 py-1 rounded-xl gap-2.5 font-bold text-[#8c6820]"
              >
                <div className="bg-[#183e2b] text-white text-xs px-2.5 py-1 rounded-lg flex flex-col items-center leading-none">
                  3{" "}
                  <span className="text-[10px] font-normal lowercase">
                    items
                  </span>
                </div>
                <div>ETB 1,450</div>
              </Link>

              {/* Auth Controls */}
              {sessionId ? (
                <div className="flex items-center gap-4 pl-4 border-l border-[#e5d5c5]">
                  <span className="text-sm font-semibold text-[#6b1f0a]">
                    Hello, {userName}
                  </span>
                  <form action={logoutAction}>
                    <button
                      type="submit"
                      className="border border-[#6b1f0a] text-[#6b1f0a] px-3 py-1 rounded-md text-xs font-semibold hover:bg-[#6b1f0a] hover:text-white transition-all"
                    >
                      Logout
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex items-center gap-3 pl-4 border-l border-[#e5d5c5]">
                  <Link href="/signin" className="font-semibold text-[#2c1a11]">
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="bg-[#f1e2d5] text-[#2c1a11] px-4.5 py-2 rounded-lg font-semibold text-sm"
                  >
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </header>

          {/* Main Container */}
          <main className="flex-1">{children}</main>

          {/* Footer Component */}
          <footer className="bg-[#fbf5ef] border-t border-[#f0e2d3] px-6 md:px-16 pt-14 pb-8 text-[#6e5e54]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              {/* Column 1 */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#6b1f0a] mb-4">
                  Mesob House
                </h3>
                <p className="text-sm leading-relaxed mb-6">
                  Sharing traditions from the Ethiopian highlands — one Gursha
                  at a time.
                </p>
                <div className="bg-[#f4e7da] p-4 rounded-xl flex items-center gap-3 text-xs text-[#2c1a11]">
                  <span className="text-lg">☕</span>
                  <div>
                    <strong>Traditional Coffee Ceremony</strong> daily at 4:00
                    PM
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="text-xs font-bold tracking-wider uppercase text-[#2c1a11] mb-5">
                  Hospitality Hours
                </h4>
                <p className="text-sm mb-3">
                  Tuesday – Sunday: 11:30 AM – 11:00 PM
                </p>
                <p className="text-sm mb-3">
                  Monday: Reserved for Private Banquets
                </p>
                <p className="text-xs font-semibold text-[#8c6820] mt-4">
                  Jebena Buna & Fresh Roasting All Evening
                </p>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="text-xs font-bold tracking-wider uppercase text-[#2c1a11] mb-5">
                  Guest Account & Traditions
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/signin" className="hover:text-[#6b1f0a]">
                      Sign In to Mesob Rewards
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="hover:text-[#6b1f0a]">
                      Create Member Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu?category=fasting"
                      className="hover:text-[#6b1f0a]"
                    >
                      Vegan Fasting (Beyaynetu / Tsom)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu?category=beverages"
                      className="hover:text-[#6b1f0a]"
                    >
                      House Tej (Pure Honey Wine)
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="text-xs font-bold tracking-wider uppercase text-[#2c1a11] mb-5">
                  Addis Location
                </h4>
                <p className="text-sm mb-3">
                  Bole Medhanialem, Addis Ababa & express delivery across town.
                </p>
                <div className="text-lg font-bold text-[#6b1f0a] my-3">
                  +251 911 234 567
                </div>
                <div className="flex gap-3 text-lg">
                  <span>🍴</span> <span>☕</span> <span>🔗</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#f0e2d3] pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
              <div>
                &copy; {new Date().getFullYear()} Mesob House Habesha Dining.
                Authentic Ethiopian & Eritrean Heritage.
              </div>
              <div className="flex gap-6">
                <Link href="#" className="hover:underline">
                  Gursha Hospitality
                </Link>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:underline">
                  Terms of Table
                </Link>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
