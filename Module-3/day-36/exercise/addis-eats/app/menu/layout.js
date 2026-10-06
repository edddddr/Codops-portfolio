export default function MenuLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "2rem", minHeight: "60vh" }}>
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
