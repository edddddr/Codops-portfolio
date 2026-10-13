import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetch("https://addis-eats-backend.onrender.com/menu");
  const dish = await data.json();

  if (!dish) return NextResponse.json({ status: 404 });
  return NextResponse.json(dish);
}
