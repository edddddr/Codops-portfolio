"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function FilterShell({ children }) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category"); // reads '?category=starters'
  console.log(selectedCategory);

  // If no category is selected, render everything exactly as the server sent it
  if (!selectedCategory) {
    return <>{children}</>;
  }

  // Helper function to recursively find and filter the grid dish child nodes
  const filterChildren = (node) => {
    return React.Children.map(node, (child) => {
      if (!React.isValidElement(child)) return child;

      // If this is one of our dish containers with the data-category attribute
      if (child.props["data-category"]) {
        const dishCategory = child.props["data-category"];

        // Hide the item if it does not match the URL selection
        if (dishCategory !== selectedCategory) {
          return null;
        }
      }

      // If the child contains nested child arrays (like our wrapper div grid), look deeper
      if (child.props.children) {
        return React.cloneElement(child, {
          children: filterChildren(child.props.children),
        });
      }

      return child;
    });
  };

  return <>{filterChildren(children)}</>;
}
