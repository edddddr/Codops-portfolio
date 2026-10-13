"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { orderSchema } from "@/app/lib/orderSchema";

export async function createOrderAction(prevState, formData) {
  const rawData = {
    customerName: formData.get("customerName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    items: JSON.parse(formData.get("items") || "[]"),
  };

  const validationResult = orderSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  const createdOrder = {
    id: `ORD-${Date.now()}`,
    ...validationResult.data,
    status: "Confirmed",
  };

  revalidatePath("/menu");
  revalidatePath("/checkout");

  return {
    success: true,
    message: "Order placed successfully!",
    orderId: createdOrder.id,
    fieldErrors: {},
  };
}

export async function cancelOrderAction(orderId, orderOwnerId) {
  // Check active user session via cookies
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_id")?.value;
  const currentUserId = cookieStore.get("user_id")?.value;

  if (!sessionToken || !currentUserId) {
    return { success: false, error: "Unauthorized: Active session required." };
  }

  if (currentUserId !== orderOwnerId) {
    return { success: false, error: "Forbidden: You do not own this order." };
  }

  console.log(`Order ${orderId} cancelled by owner ${currentUserId}`);

  revalidatePath("/checkout");
  revalidatePath("/cart");

  return { success: true, message: `Order ${orderId} cancelled successfully.` };
}
