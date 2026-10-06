import Link from "next/link";

export default function MenuNotFound() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dish Not Found</h2>
      <p>
        Sorry, the requested dish could not be found in the Addis Eats menu.
      </p>
      <Link href="/menu">Return to Menu</Link>
    </div>
  );
}
