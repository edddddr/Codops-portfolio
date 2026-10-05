import Dishlist from "./Dishlist";

import { Suspense } from "react";

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-orange-500">Our Menu</h1>

      <Suspense
        fallback={
          <p className="text-gray-400 animate-pulse">
            Loading amazing dishes...
          </p>
        }
      >
        <Dishlist />
      </Suspense>
    </div>
  );
}

// Separate component to handle the async data fetch
