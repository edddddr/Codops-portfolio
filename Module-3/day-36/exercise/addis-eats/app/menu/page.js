import SearchBox from "./SearchBox";

export const revalidate = 60;

export default async function MenuPage({ searchParams }) {
  const { category = "all" } = await searchParams;

  return (
    <div>
      <h1>Addis Eats Menu</h1>
      <SearchBox activeCategory={category} />
    </div>
  );
}
