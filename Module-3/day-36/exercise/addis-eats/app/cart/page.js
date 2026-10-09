"use client";

import Link from "next/link";
import { useCart } from "../providers";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.priceETB * item.quantity,
    0,
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={{ marginTop: "20px" }}>
          <p>Your cart is currently empty.</p>
          <p style={{ marginTop: "10px" }}>
            <Link href="/menu" style={{ color: "#0070f3" }}>
              ← Return to Menu
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <div style={{ marginTop: "20px" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div>
                  <h3 style={{ margin: 0 }}>{item.nameEn}</h3>
                  <p
                    style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}
                  >
                    {item.priceETB} ETB each
                  </p>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    style={{ padding: "4px 8px", cursor: "pointer" }}
                  >
                    -
                  </button>
                  <span>
                    <strong>{item.quantity}</strong>
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    style={{ padding: "4px 8px", cursor: "pointer" }}
                  >
                    +
                  </button>

                  <p
                    style={{
                      width: "80px",
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    {item.priceETB * item.quantity} ETB
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: "#ff4d4f",
                      color: "white",
                      border: "none",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "30px",
              paddingTop: "20px",
              borderTop: "2px solid #333",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={clearCart}
              style={{
                backgroundColor: "#f0f0f0",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Clear Cart
            </button>

            <h2>Total: {totalPrice} ETB</h2>
          </div>

          <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
            <Link
              href="/menu"
              style={{ color: "#0070f3", textDecoration: "none" }}
            >
              ← Continue Shopping
            </Link>
            <Link
              href="/checkout"
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
