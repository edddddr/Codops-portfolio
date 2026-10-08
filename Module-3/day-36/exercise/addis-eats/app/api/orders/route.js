import { NextResponse } from "next/server";
import { orderSchema } from "@/app/lib/orderSchema";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate request body using Zod
    const validationResult = orderSchema.safeParse(body);

    if (!validationResult.success) {
      // Format validation errors into fieldErrors object
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json({ fieldErrors }, { status: 422 });
    }

    // Process valid order (e.g., save to DB or external backend)
    const newOrder = {
      id: `ORD-${Date.now()}`,
      ...validationResult.data,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      { message: "Order placed successfully", order: newOrder },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
