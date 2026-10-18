"use client";

import { useRouter } from "next/navigation";

export const categories = [
  { id: "all", name: "All Dishes", apiCategory: "all", count: 24 },
  {
    id: "traditional",
    name: "Traditional Stews & Wat",
    apiCategory: "Traditional Stews & Wat",
    count: 8,
  },
  { id: "tibs", name: "Tibs & Grills", apiCategory: "Tibs & Grills", count: 5 },
  {
    id: "fasting",
    name: "Fasting & Vegan / Tsom",
    apiCategory: "Fasting & Vegan / Tsom",
    count: 6,
  },
  {
    id: "raw",
    name: "Raw & Cured Delicacies / Kitfo",
    apiCategory: "Raw & Cured Delicacies / Kitfo",
    count: 3,
  },
  {
    id: "beverages",
    name: "Beverages & Tej",
    apiCategory: "Beverages & Tej",
    count: 6,
  },
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
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none my-4">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              isActive
                ? "bg-[#6b1f0a] text-white shadow-sm"
                : "bg-[#f4e7da] text-[#2c1a11] hover:bg-[#e9d9c8] border border-[#e5d5c5]"
            }`}
          >
            <span>{cat.name}</span>
            <span
              className={`text-[11px] font-normal ${
                isActive ? "text-white/80" : "text-[#6e5e54]"
              }`}
            >
              ({cat.count})
            </span>
          </button>
        );
      })}
    </div>
  );
}
