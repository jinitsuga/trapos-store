import * as React from "react";
import { categoryList } from "@/app/utils/categories";
import Category from "./Category";

export default function CategoriesNav() {
  const categoryBtns = categoryList.map((cat, id) => {
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
