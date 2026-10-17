import { cookies } from "next/headers";

/**
 * Retrieves and validates session details from incoming request cookies.
 * Used across all server-side components and actions.
 */
export async function getSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value;
  const userId = cookieStore.get("user_id")?.value;
  const userRole = cookieStore.get("user_role")?.value || "customer"; // Default role: customer

  if (!sessionId || !userId) {
    return null;
  }

  return {
    sessionId,
    userId,
    role: userRole,
    isStaff: userRole === "staff" || userRole === "admin",
  };
}
