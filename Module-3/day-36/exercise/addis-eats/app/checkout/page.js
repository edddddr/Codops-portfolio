"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useCart } from "../providers";
import {
  createOrderAction,
  cancelOrderAction,
} from "@/app/actions/orderActions";

const initialState = {
  success: false,
  message: "",
  fieldErrors: {},
};

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  // React 19 / Next.js useActionState hook handling pending state and state updates
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const res = await createOrderAction(prevState, formData);
      if (res.success) {
        clearCart();
      }
      return res;
    },
    initialState,
  );

  // Helper handler to test cancelOrderAction ownership authorization
  const handleCancel = async () => {
    const result = await cancelOrderAction("ORD-12345", "USER-CURRENT-ID");
    alert(result.message || result.error);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Checkout</h1>

      {state.success ? (
        <div
          style={{
            padding: "15px",
            backgroundColor: "#e6fffa",
            border: "1px solid #38b2ac",
            borderRadius: "5px",
          }}
        >
          <h2>🎉 {state.message}</h2>
          <p>
            Order ID: <strong>{state.orderId}</strong>
          </p>
          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <Link href="/menu" style={{ color: "#0070f3" }}>
              Return to Menu
            </Link>
            <button
              onClick={handleCancel}
              style={{ padding: "6px 12px", cursor: "pointer" }}
            >
              Test Cancel Order
            </button>
          </div>
        </div>
      ) : (
        <form
          action={formAction}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {/* Hidden JSON input for cart items */}
          <input type="hidden" name="items" value={JSON.stringify(cart)} />

          <div>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Full Name:
            </label>
            <input
              type="text"
              name="customerName"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
              }}
            />
            {state.fieldErrors?.customerName && (
              <p style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>
                {state.fieldErrors.customerName[0]}
              </p>
            )}
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Phone Number:
            </label>
            <input
              type="text"
              name="phone"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
              }}
            />
            {state.fieldErrors?.phone && (
              <p style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>
                {state.fieldErrors.phone[0]}
              </p>
            )}
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Delivery Address:
            </label>
            <textarea
              name="address"
              rows={3}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
              }}
            />
            {state.fieldErrors?.address && (
              <p style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>
                {state.fieldErrors.address[0]}
              </p>
            )}
          </div>

          {state.fieldErrors?.items && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {state.fieldErrors.items[0]}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            style={{
              padding: "12px",
              backgroundColor: isPending ? "#ccc" : "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: isPending ? "not-allowed" : "pointer",
            }}
          >
            {isPending ? "Submitting Order..." : "Place Order"}
          </button>
        </form>
      )}
    </div>
  );
}
