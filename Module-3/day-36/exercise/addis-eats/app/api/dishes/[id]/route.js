import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;

  const data = await fetch("https://addis-eats-backend.onrender.com/menu");
  const dishes = await data.json();

  console.log(dishes.data);
  const dish = dishes.data.find((m) => m.id === id);
  console.log(dish);

  if (!dish) return NextResponse.json({ status: 404 });
  return NextResponse.json({ msg: "Holla", "req-pamrams": id, data: dish });
}
