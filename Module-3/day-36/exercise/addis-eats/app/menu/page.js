import DishList from "./_components/DishList";
import CategoryBar from "./_components/CategoryBar";

export const revalidate = 60;

const categories = [
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

export default async function MenuPage({ searchParams }) {
  const { category = "all" } = await searchParams;

  const res = await fetch("https://addis-eats-backend.onrender.com/menu");
  if (!res.ok) throw new Error("Failed to fetch menu items");

  const data = await res.json();
  const dishes = data.data;

  const matchedCategory = categories.find((c) => c.id === category);

  const targetApiCategory = matchedCategory
    ? matchedCategory.apiCategory
    : "all";

  const filteredDishes =
    targetApiCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === targetApiCategory);

  return (
    <div>
      <h1>Addis Eats Menu</h1>
      <CategoryBar activeCategory={category} />
      <DishList dishes={filteredDishes} />
    </div>
  );
}
