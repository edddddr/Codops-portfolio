export const metadata = {
  title: "Checkout",
  description:
    "Complete your order securely and get authentic Ethiopian food delivered directly to your doorstep.",
};

export default function MenuLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "2rem", minHeight: "60vh" }}>
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
