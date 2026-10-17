import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function OrdersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=/orders");
  }

  let userOrders = [];

  userOrders = [
    {
      id: "ORD-101",
      userId: session.userId,
      items: "Doro Wat x 1",
      totalETB: 650,
      status: "Delivered",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Your Order History</h1>
      <p style={{ color: "#666", fontSize: "14px" }}>
        Showing orders scoped strictly to Account ID:{" "}
        <strong>{session.userId}</strong>
      </p>

      {userOrders.length === 0 ? (
        <p style={{ marginTop: "20px" }}>No orders found for your account.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {userOrders.map((order) => (
            <li
              key={order.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            >
              <h3>Order #{order.id}</h3>
              <p>
                Status: <strong>{order.status}</strong>
              </p>
              <p>Total: {order.totalETB} ETB</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
