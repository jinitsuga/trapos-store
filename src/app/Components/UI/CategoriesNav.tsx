import * as React from "react";
import Category from "./Category";
import { categories } from "@/app/data/data";
export default function CategoriesNav() {
  const categoryBtns = categories.map((cat, id) => {
    return (
      <li>
        <Category key={id} cat={cat} />
      </li>
    );
  });

  return (
    <nav className="flex flex-col justify-self-end ">
      <ul>{categoryBtns}</ul>
    </nav>
  );
}
