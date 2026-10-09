"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginAction } from "@/app/actions/authActions";

const initialState = {
  success: false,
  message: "",
  fieldErrors: {},
};

export default function LoginPage() {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const res = await loginAction(prevState, formData);
      if (res.success) {
        setTimeout(() => router.push("/menu"), 1000);
      }
      return res;
    },
    initialState,
  );

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h1>Sign In</h1>

      {state.message && !state.success && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#fff5f5",
            color: "#c53030",
            borderRadius: "4px",
            marginTop: "10px",
          }}
        >
          {state.message}
        </div>
      )}

      {state.success && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#e6fffa",
            color: "#234e52",
            borderRadius: "4px",
            marginTop: "10px",
          }}
        >
          {state.message} Redirecting...
        </div>
      )}

      <form
        action={formAction}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "15px",
        }}
      >
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
          {state.fieldErrors?.email && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              {state.fieldErrors.email[0]}
            </p>
          )}
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
          {state.fieldErrors?.password && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              {state.fieldErrors.password[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{
            padding: "10px",
            backgroundColor: isPending ? "#ccc" : "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: isPending ? "not-allowed" : "pointer",
          }}
        >
          {isPending ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Don&apos;t have an account?{" "}
        <Link href="/register" style={{ color: "#0070f3" }}>
          Register here
        </Link>
      </p>
    </div>
  );
}
