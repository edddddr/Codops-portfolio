import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Authentic flavors delivered fast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white min-h-screen flex flex-col">
        <Providers>
          <div className="flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
