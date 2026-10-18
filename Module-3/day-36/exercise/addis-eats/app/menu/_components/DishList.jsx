"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../providers";

export default function DishList({ dishes }) {
  const { addToCart } = useCart();

  if (!dishes || dishes.length === 0) {
    return <p className="text-center py-10 text-[#6e5e54]">No dishes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {dishes.map((dish) => (
        <div
          key={dish._id || dish.id}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0e2d3] flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div>
            {/* Image & Badge Container */}
            <div className="h-48 relative bg-[#f1e2d5] overflow-hidden">
              <Image
                src={dish.image || "/og/kitfo.jpg"}
                alt={dish.nameEn || dish.name || "Dish"}
                fill
                className="object-cover"
              />
              {/* Category Tag Badge */}
              <span className="absolute top-2.5 left-2.5 bg-[#6b1f0a] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {dish.tag || dish.category || "HIGHLAND CLASSIC"}
              </span>

              {/* Spice Indicator Badge */}
              <span className="absolute bottom-2.5 right-2.5 bg-white/95 text-[#2c1a11] text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm border border-gray-100 flex items-center gap-1">
                🌶️ {dish.spiceLevel || "Medium Hot"}
              </span>
            </div>

            {/* Dish Text Details */}
            <div className="p-4">
              <h3 className="font-serif text-lg font-bold text-[#2c1a11] mb-1">
                {dish.nameEn || dish.name}
              </h3>
              <p className="text-[#6e5e54] text-xs line-clamp-2 leading-relaxed mb-4">
                {dish.description ||
                  "Slow-cooked tender dish prepared with traditional organic spices."}
              </p>
            </div>
          </div>

          {/* Card Footer: Price & Actions */}
          <div className="p-4 pt-0 flex justify-between items-center mt-auto">
            <span className="font-bold text-sm text-[#6b1f0a]">
              {dish.priceETB || dish.price || 0} ETB
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => addToCart(dish)}
                className="bg-[#6b1f0a] hover:bg-[#521707] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                + Add
              </button>

              <Link
                href={`/menu/${dish._id || dish.id}`}
                className="text-[#6b1f0a] hover:underline text-xs font-semibold"
              >
                View →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
