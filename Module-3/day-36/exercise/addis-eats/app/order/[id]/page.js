import { notFound } from "next/navigation";
import OrderPoll from "./OrderPoll";

export default async function OrderPage({ params }) {
  const { id } = await params;

  let initialOrder = null;

  try {
    const res = await fetch(
      `https://addis-eats-backend.onrender.com/orders/${id}`,
    );
    if (res.status === 404) notFound();
    if (res.ok) {
      initialOrder = await res.json();
    }
  } catch (err) {
    initialOrder = {
      id,
      status: "Preparing",
      customerName: "Highland Diner",
      totalETB: 850,
    };
  }

  return (
    <main style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Order Tracking</h1>
      <OrderPoll initialOrder={initialOrder} orderId={id} />
    </main>
  );
}
