"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CategoryBar from "./_components/CategoryBar";
import DishList from "./_components/DishList";

export default function MenuPage() {
  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        setLoading(true);
        const res = await fetch("https://addis-eats-backend.onrender.com/menu");

        if (!res.ok) {
          throw new Error("Failed to fetch menu items");
        }

        const data = await res.json();
        setDishes(data.data);
        console.log(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Loading menu items...</p>;
  if (error)
    return <p style={{ padding: "20px", color: "red" }}>Error: {error}</p>;

  // Filter dishes based on the selected category key
  const filteredDishes =
    selectedCategory === "all"
      ? dishes
      : dishes.filter(
          (dish) =>
            dish.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <main style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">← Home</Link> | <Link href="/cart">Cart</Link>
      </nav>
      <h1>Addis Eats Menu</h1>
      <CategoryBar
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <DishList dishes={filteredDishes} />
    </main>
  );
}
