import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function KitchenPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=/kitchen");
  }

  // Server-side Role Authorization Check (Reject non-staff roles)
  if (!session.isStaff) {
    return (
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ color: "red" }}>403 Forbidden</h1>
        <p>
          Access Denied: You do not have staff permissions to view the Kitchen
          Display System.
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>👨‍🍳 Kitchen Display System (Staff Only)</h1>
      <p style={{ color: "green" }}>
        Authenticated as Staff: <strong>{session.userId}</strong>
      </p>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        <div
          style={{
            border: "2px solid #ffc107",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>Table 4 - ORD-881</h3>
          <p>• Doro Wat (Extra Spicy) x 2</p>
          <p>• Tibs & Grills x 1</p>
          <button
            style={{
              marginTop: "10px",
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            Mark Ready
          </button>
        </div>
      </div>
    </main>
  );
}
