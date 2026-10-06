import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Addis Eats",
  description: "Authentic Ethiopian Cuisine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Addis Eats</h2>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} Addis Eats. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
