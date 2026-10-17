export const metadata = {
  title: "Your Cart",
  description:
    "Review your selected Ethiopian dishes and prepare for checkout.",
};

export default function MenuLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "2rem", minHeight: "60vh" }}>
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
