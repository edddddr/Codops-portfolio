import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const res = await fetch("https://addis-eats-backend.onrender.com/menu");
    if (!res.ok) return [];

    const dishes = await res.json();

    return dishes.data.map((dish) => ({
      id: String(dish.id),
    }));
  } catch (err) {
    consol.log(err);
    return [];
  }
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;

  let dish = null;
  let filtered;

  try {
    const res = await fetch(`https://addis-eats-backend.onrender.com/menu/`);
    if (res.status === 404) notFound();
    if (!res.ok) throw new Error("Failed to fetch dish");

    let dish = await res.json();
    filtered = dish.data.filter((d) => d.id === id)[0];
  } catch (err) {
    console.log(err);
    notFound();
  }

  return (
    <div>
      <p>
        <Link href="/menu">← Back to Menu</Link>
      </p>
      <h1 style={{ marginTop: "1rem" }}>{filtered.nameEn}</h1>
      <p style={{ fontSize: "1.1rem", color: "#555", margin: "1rem 0" }}>
        {filtered.description}
      </p>
      <p>
        <strong>Category:</strong> {filtered.category}
      </p>
      <p>
        <strong>Price:</strong> ${filtered.priceETB}
      </p>
    </div>
  );
}
