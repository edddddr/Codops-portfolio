"use client";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

export default function OrderPoll({ initialOrder, orderId }) {
  const {
    data: order,
    error,
    isLoading,
  } = useSWR(
    `https://addis-eats-backend.onrender.com/orders/${orderId}`,
    fetcher,
    {
      fallbackData: initialOrder,
      refreshInterval: 5000,
    },
  );

  if (error)
    return <p style={{ color: "red" }}>Error loading order updates.</p>;

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>
        Order Status:{" "}
        <span style={{ color: "#0070f3" }}>{order.status || "Processing"}</span>
      </h2>
      <p>
        <strong>Order ID:</strong> {order.id || orderId}
      </p>
      <p>
        <strong>Customer:</strong> {order.customerName || "N/A"}
      </p>
      <p>
        <strong>Total:</strong> {order.totalETB || order.total || 0} ETB
      </p>
      <p style={{ fontSize: "12px", color: "#666", marginTop: "10px" }}>
        🔄 Automatically refreshing every 5 seconds...
      </p>
    </div>
  );
}
