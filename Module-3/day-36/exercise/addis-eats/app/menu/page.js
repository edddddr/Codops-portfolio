import Link from "next/link";

// Set route revalidation (ISR) to 60 seconds
export const revalidate = 60;

export default async function MenuPage() {
  const res = await fetch("https://addis-eats-backend.onrender.com/menu");

  if (!res.ok) {
    throw new Error("Failed to fetch menu items");
  }

  const dishes = await res.json();

  return (
    <div>
      <h1>Addis Eats Menu</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {dishes.data.map((dish) => (
          <div
            key={dish._id || dish.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>{dish.nameEn}</h3>
            <p style={{ color: "#666", fontSize: "14px", margin: "0.5rem 0" }}>
              {dish.description}
            </p>
            <p>
              <strong>${dish.priceETB}</strong>
            </p>
            <Link
              href={`/menu/${dish._id || dish.id}`}
              style={{
                display: "inline-block",
                marginTop: "0.5rem",
                color: "#0070f3",
              }}
            >
              View Dish →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
