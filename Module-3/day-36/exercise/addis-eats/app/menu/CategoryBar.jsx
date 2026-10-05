"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const categories = [
  { id: "all", name: "All Dishes" },
  { id: "traditional", name: "Traditional Stews & Wat" },
  { id: "tibs", name: "Tibs & Grills" },
  { id: "fasting", name: "Fasting & Vegan / Tsom" },
  { id: "raw", name: "Raw & Cured Delicacies / Kitfo" },
  { id: "beverages", name: "Beverages & Tej" },
];

export default function CategoryBar() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <aside className="w-64 border-r border-gray-800 p-4 shrink-0 bg-black text-white min-h-screen">
      <h2 className="text-xl font-bold mb-4 text-orange-500">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <li key={category.id}>
              <Link
                href={`/menu?category=${category.id}`}
                className={`block p-2 rounded transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white font-semibold"
                    : "hover:bg-gray-900 text-gray-300"
                }`}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
