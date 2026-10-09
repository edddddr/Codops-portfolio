import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import { logoutAction } from "@/app/actions/authActions";

export const metadata = {
  title: "Addis Eats",
  description: "Authentic Ethiopian Cuisine",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value;
  const userName = cookieStore.get("user_name")?.value;

  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <h2>Addis Eats</h2>
            <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>

              {sessionId ? (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "#ffc107" }}>
                    Hello, {userName}
                  </span>
                  <form action={logoutAction}>
                    <button
                      type="submit"
                      style={{ padding: "4px 8px", cursor: "pointer" }}
                    >
                      Logout
                    </button>
                  </form>
                </div>
              ) : (
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "10px" }}
                >
                  <Link
                    href="/login"
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #fff",
                      borderRadius: "4px",
                    }}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#0070f3",
                      borderRadius: "4px",
                    }}
                  >
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </header>

          <main>{children}</main>

          <footer>
            <p>
              &copy; {new Date().getFullYear()} Addis Eats. All rights reserved.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
