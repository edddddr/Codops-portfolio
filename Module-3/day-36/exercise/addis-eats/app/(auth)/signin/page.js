"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { signInAction } from "@/app/actions/authActions";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const nextParam = searchParams.get("next") || "/";

  const isBadRedirect =
    !nextParam.startsWith("/") || nextParam.startsWith("//");

  const [state, formAction, isPending] = useActionState(signInAction, null);

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
      <p style={{ color: "#666", fontSize: "14px" }}>
        Destination after login:{" "}
        <code>{isBadRedirect ? "/ (rejected malicious link)" : nextParam}</code>
      </p>

      {state?.error && (
        <p style={{ color: "red", margin: "10px 0" }}>{state.error}</p>
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
        <input type="hidden" name="next" value={nextParam} />

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="e.g. customer@example.com or staff@example.com"
            required
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            required
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
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
            cursor: isPending ? "not-allowed" : "pointer",
          }}
        >
          {isPending ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
