export const metadata = {
  title: "Menu",
  description: "Doro Wat, Tibs, Kitfo and Shiro, delivered across Addis Ababa.",
  alternates: { canonical: "/menu" },
};

export default function MenuLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "2rem", minHeight: "60vh" }}>
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
