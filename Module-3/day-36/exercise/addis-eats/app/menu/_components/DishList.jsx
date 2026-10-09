"use client";

import Link from "next/link";
import { useCart } from "../../providers"; // adjust relative path if needed

export default function DishList({ dishes }) {
  const { addToCart } = useCart();

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
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>{dish.nameEn}</h3>
            <p style={{ color: "#666", fontSize: "14px", margin: "0.5rem 0" }}>
              {dish.description}
            </p>
            <p>
              <strong>{dish.priceETB} ETB</strong>
            </p>
          </div>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => addToCart(dish)}
              style={{
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </button>

            <Link
              href={`/menu/${dish.id}`}
              style={{
                color: "#0070f3",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              View →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
