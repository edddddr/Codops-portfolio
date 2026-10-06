import Link from "next/link";

export default function DishList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return <p>No dishes found for this category.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {dishes.map((dish) => (
        <div
          key={dish._id || dish.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{dish.name}</h3>
          <p style={{ color: "#666", fontSize: "14px" }}>{dish.description}</p>
          <p>
            <strong>Price:</strong> ${dish.price}
          </p>
          <Link
            href={`/menu/${dish._id || dish.id}`}
            style={{
              display: "inline-block",
              marginTop: "10px",
              color: "#0070f3",
            }}
          >
            View Details →
          </Link>
        </div>
      ))}
    </div>
  );
}
