import Link from "next/link";

export default function DishList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return <p>No dishes found.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {dishes.map((dish) => (
        <div
          key={dish.id}
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
            href={`/menu/${dish.id}`}
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
  );
}
