// Step 2: Fetch all dynamic paths at build time
export async function generateStaticParams() {
  const res = await fetch("https://addis-eats-backend.onrender.com/menu/");
  const specials = await res.json();

  console.log(specials);

  // Return an array mapping the dynamic route parameter [dishId]
  return specials.data.map((dish) => ({
    dishId: dish._id || dish.id,
  }));
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;

  return (
    <div className="max-w-2xl bg-zinc-900 p-6 rounded border border-gray-800">
      <h1 className="text-2xl font-bold text-white">Dish ID Details</h1>
      <p className="text-gray-400 mt-2">
        Viewing data for route parameter: {id}
      </p>
    </div>
  );
}
