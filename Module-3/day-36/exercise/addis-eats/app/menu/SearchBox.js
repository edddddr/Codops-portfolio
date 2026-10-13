"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import DishList from "./_components/DishList";
import CategoryBar, { categories } from "./_components/CategoryBar";

export default function SearchBox({ activeCategory = "all" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  // Debounce search input by 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchTerm);
      setPage(1); // Reset page on new search
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset page when active category changes
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  // Fetch full menu list using SWR
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

  // Map active URL category to target API string
  const matchedCategory = categories.find((c) => c.id === activeCategory);
  const targetApiCategory = matchedCategory
    ? matchedCategory.apiCategory
    : "all";

  // 1. Filter by Category
  const categoryFiltered =
    targetApiCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === targetApiCategory);

  // 2. Filter by Search Query
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

  // 3. Client-side Pagination Slicing
  const totalPages = Math.ceil(searchedDishes.length / itemsPerPage) || 1;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedDishes = searchedDishes.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div>
      {/* Category Bar */}
      <CategoryBar activeCategory={activeCategory} />

      {/* Search Bar Input */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search dishes by name or ingredient..."
          style={{
            padding: "10px 14px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />
      </div>

      {isLoading && <p>Loading dishes...</p>}
      {error && <p style={{ color: "red" }}>Failed to load menu items.</p>}

      {/* Dish List Grid */}
      <DishList dishes={paginatedDishes} />

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            style={{
              padding: "8px 16px",
              cursor: page === 1 ? "not-allowed" : "pointer",
              borderRadius: "4px",
            }}
          >
            ← Previous
          </button>

          <span>
            Page <strong>{page}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page >= totalPages}
            style={{
              padding: "8px 16px",
              cursor: page >= totalPages ? "not-allowed" : "pointer",
              borderRadius: "4px",
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
