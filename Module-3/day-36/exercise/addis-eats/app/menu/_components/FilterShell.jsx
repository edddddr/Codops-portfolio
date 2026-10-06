"use client";

import { useState } from "react";
import CategoryBar from "./CategoryBar";

export default function FilterShell({ children }) {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
      <CategoryBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <div>{children}</div>
    </div>
  );
}
