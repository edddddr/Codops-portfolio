import FilterShell from "./FilterShell";

export const revalidate = 3600;

export default async function Dishlist() {
  const res = await fetch("https://addis-eats-backend.onrender.com/menu/", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch dishes");
  const dishes = await res.json();

  return (
    <FilterShell>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dishes.data.map((dish) => (
          <div
            key={dish.id}
            className="border border-gray-800 p-4 rounded bg-zinc-900"
          >
            <h3 className="font-semibold text-xl text-white">{dish.nameEn}</h3>
            <p className="text-gray-400 text-sm mt-1">{dish.description}</p>
            <span className="text-orange-400 block mt-2 font-medium">
              ${dish.priceETB}
            </span>
          </div>
        ))}
      </div>
    </FilterShell>
  );
}
