"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { orderSchema } from "@/app/lib/orderSchema";

/**
 * Create Order Server Action (replaces API fetch call)
 */
export async function createOrderAction(prevState, formData) {
  // Extract values from FormData
  const rawData = {
    customerName: formData.get("customerName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    items: JSON.parse(formData.get("items") || "[]"),
  };

  // Validate form data
  const validationResult = orderSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  // Simulate saving order to database
  const createdOrder = {
    id: `ORD-${Date.now()}`,
    ...validationResult.data,
    status: "Confirmed",
  };

  // Revalidate menu and checkout routes to refresh server-side cached state
  revalidatePath("/menu");
  revalidatePath("/checkout");

  return {
    success: true,
    message: "Order placed successfully!",
    orderId: createdOrder.id,
    fieldErrors: {},
  };
}

/**
 * Cancel Order Action (checks active session & record owner)
 */
export async function cancelOrderAction(orderId, orderOwnerId) {
  // Check active user session via cookies
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_id")?.value;
  const currentUserId = cookieStore.get("user_id")?.value;

  if (!sessionToken || !currentUserId) {
    return { success: false, error: "Unauthorized: Active session required." };
  }

  // Verify record owner match
  if (currentUserId !== orderOwnerId) {
    return { success: false, error: "Forbidden: You do not own this order." };
  }

  // Execute cancellation write
  console.log(`Order ${orderId} cancelled by owner ${currentUserId}`);

  // Revalidate relevant pages after successful mutation
  revalidatePath("/checkout");
  revalidatePath("/cart");

  return { success: true, message: `Order ${orderId} cancelled successfully.` };
}
