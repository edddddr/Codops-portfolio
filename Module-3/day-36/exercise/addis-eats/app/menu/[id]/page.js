import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DishDetailPage({ params }) {
  const { id } = await params;

  let dish = null;

  try {
    const res = await fetch(`https://addis-eats-backend.onrender.com/menu/`);

    if (res.status === 404) {
      notFound();
    }

    if (!res.ok) {
      throw new Error("Failed to fetch dish details");
    }

    dish = await res.json();
  } catch (err) {
    notFound();
  }

  const filtered = dish.data.filter((d) => d.id === id)[0];

  return (
    <main style={{ padding: "20px" }}>
      <p>
        <Link href="/menu">← Back to Menu</Link>
      </p>
      <h1>{filtered.nameEn}</h1>
      <p style={{ fontSize: "18px", color: "#555" }}>{filtered.description}</p>
      <p>
        <strong>Category:</strong> {filtered.category}
      </p>
      <p>
        <strong>Price:</strong> {filtered.priceETB}
      </p>
    </main>
  );
}
