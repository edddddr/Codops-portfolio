"use client";

export default function MenuError({ error, reset }) {
  return (
    <div style={{ padding: "20px", color: "red" }}>
      <h2>Something went wrong loading the menu!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
