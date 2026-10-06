"use client";

import { useRouter } from "next/navigation";

export const categories = [
  { id: "all", name: "All Dishes", apiCategory: "all" },
  {
    id: "traditional",
    name: "Traditional Stews & Wat",
    apiCategory: "Traditional Stews & Wat",
  },
  { id: "tibs", name: "Tibs & Grills", apiCategory: "Tibs & Grills" },
  {
    id: "fasting",
    name: "Fasting & Vegan / Tsom",
    apiCategory: "Fasting & Vegan / Tsom",
  },
  {
    id: "raw",
    name: "Raw & Cured Delicacies / Kitfo",
    apiCategory: "Raw & Cured Delicacies / Kitfo",
  },
  { id: "beverages", name: "Beverages & Tej", apiCategory: "Beverages & Tej" },
];

export default function CategoryBar({ activeCategory }) {
  const router = useRouter();

  const handleSelect = (categoryId) => {
    if (categoryId === "all") {
      router.push("/menu");
    } else {
      // Pushes clean slug like /menu?category=traditional
      router.push(`/menu?category=${categoryId}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleSelect(cat.id)}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            backgroundColor: activeCategory === cat.id ? "#0070f3" : "#f0f0f0",
            color: activeCategory === cat.id ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
