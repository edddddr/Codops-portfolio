import { Suspense } from "react";
import Dishlist from "./Dishlist";

export const revalidate = 3600;

export default async function MenuPage() {
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
