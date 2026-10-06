import Link from "next/link";

const categories = [
  { id: "all", name: "All Dishes" },
  { id: "traditional", name: "Traditional Stews & Wat" },
  { id: "tibs", name: "Tibs & Grills" },
  { id: "fasting", name: "Fasting & Vegan / Tsom" },
  { id: "raw", name: "Raw & Cured Delicacies / Kitfo" },
  { id: "beverages", name: "Beverages & Tej" },
];

export default function MenuLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "2rem", minHeight: "60vh" }}>
      {/* Category Sidebar - Persists when navigating inside /menu */}
      <aside
        style={{
          width: "220px",
          borderRight: "1px solid #eee",
          paddingRight: "1rem",
        }}
      >
        <h3>Categories</h3>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          {categories.map((cat) => (
            <li key={cat.id} style={{ marginBottom: "0.75rem" }}>
              <Link
                href={`/menu?category=${cat.id}`}
                style={{ textDecoration: "none", color: "#0070f3" }}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content section for menu and [id] routes */}
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
