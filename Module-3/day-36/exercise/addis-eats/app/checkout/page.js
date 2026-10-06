import Link from "next/link";
import { cookies } from "next/headers";

// Force dynamic rendering for real-time user session checks
export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  // Reading cookies or headers requires request-time data,
  // which forces dynamic server-side rendering per user request.
  const cookieStore = await cookies();
  const userSession = cookieStore.get("session_id")?.value;

  return (
    <div>
      <h1>Checkout</h1>
      <p>
        Processing order for active session:{" "}
        <strong>{userSession || "Guest Session"}</strong>
      </p>
      <div style={{ marginTop: "1rem" }}>
        <Link href="/cart">← Return to Cart</Link>
      </div>
    </div>
  );
}
