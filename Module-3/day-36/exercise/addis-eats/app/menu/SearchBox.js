"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "../lib/fetcher";
import DishList from "./_components/DishList";
import CategoryBar, { categories } from "./_components/CategoryBar";

export default function SearchBox({ activeCategory = "all" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Displays 2 rows of 4 cards matching the image UI

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchTerm);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  const { data, error, isLoading } = useSWR(
    "https://addis-eats-backend.onrender.com/menu",
    fetcher,
    { keepPreviousData: true },
  );

  const dishes = Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data)
      ? data
      : [];

  const matchedCategory = categories.find((c) => c.id === activeCategory);
  const targetApiCategory = matchedCategory
    ? matchedCategory.apiCategory
    : "all";

  const categoryFiltered =
    targetApiCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === targetApiCategory);

  const searchedDishes =
    debouncedQuery.trim() === ""
      ? categoryFiltered
      : categoryFiltered.filter((dish) => {
          const query = debouncedQuery.toLowerCase();
          const nameEn =
            dish.nameEn?.toLowerCase() || dish.name?.toLowerCase() || "";
          const nameAm = dish.nameAm?.toLowerCase() || "";
          const category = dish.category?.toLowerCase() || "";

          return (
            nameEn.includes(query) ||
            nameAm.includes(query) ||
            category.includes(query)
          );
        });

  const totalPages = Math.ceil(searchedDishes.length / itemsPerPage) || 1;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedDishes = searchedDishes.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="space-y-6">
      {/* Light Search Bar Box */}
      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-[#f0e2d3] flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="relative w-full lg:w-96">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
            🔍
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search dishes by name (e.g. Kitfo, Shiro, Tibs, Doro Wat)..."
            className="w-full bg-[#fbf5ef] text-[#2c1a11] text-xs pl-9 pr-4 py-2.5 rounded-lg border border-[#e5d5c5] focus:outline-none focus:border-[#6b1f0a] placeholder:text-gray-400"
          />
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#2c1a11]">
          <div className="bg-[#f4e7da] px-3 py-1.5 rounded-lg border border-[#e5d5c5]">
            🌾 100% Pure Teff Injera
          </div>
          <div className="bg-[#f4e7da] px-3 py-1.5 rounded-lg border border-[#e5d5c5]">
            🌱 Fasting / Tsom Friendly
          </div>
          <div className="bg-[#f4e7da] px-3 py-1.5 rounded-lg border border-[#e5d5c5]">
            🌶️ Berbere Spiced
          </div>
        </div>
      </div>

      {/* Category Selection Bar */}
      <CategoryBar activeCategory={activeCategory} />

      {/* State Feedback */}
      {isLoading && (
        <p className="text-center py-8 text-[#6e5e54]">Loading dishes...</p>
      )}
      {error && (
        <p className="text-center py-8 text-red-500">
          Failed to load menu items.
        </p>
      )}

      {/* Render Cards Grid */}
      {!isLoading && !error && <DishList dishes={paginatedDishes} />}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 text-xs font-semibold rounded-md border border-[#e5d5c5] bg-white text-[#2c1a11] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f4e7da]"
          >
            ← Previous
          </button>

          <span className="text-xs text-[#6e5e54]">
            Page <strong className="text-[#6b1f0a]">{page}</strong> of{" "}
            <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page >= totalPages}
            className="px-4 py-2 text-xs font-semibold rounded-md border border-[#e5d5c5] bg-white text-[#2c1a11] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f4e7da]"
          >
            Next →
          </button>
        </div>
      )}

      {/* Bottom Light Banner */}
      <div className="mt-12 bg-[#f4e7da] text-[#2c1a11] rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 border border-[#e5d5c5]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#6b1f0a] text-white flex items-center justify-center text-lg shrink-0">
            🍽️
          </div>
          <div>
            <h3 className="font-serif text-base font-bold text-[#6b1f0a]">
              Experience Communal Dining Around the Mesob
            </h3>
            <p className="text-xs text-[#6e5e54]">
              All platters are served with unlimited warm Teff injera rolls and
              fresh house-made Ayib.
            </p>
          </div>
        </div>
        <Link
          href="/checkout"
          className="bg-white text-[#2c1a11] text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#e5d5c5] shadow-sm hover:bg-gray-50 whitespace-nowrap"
        >
          Reserve a Group Mesob Table
        </Link>
      </div>
    </div>
  );
}
