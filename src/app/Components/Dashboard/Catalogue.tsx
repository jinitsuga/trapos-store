"use client";
import * as React from "react";
import product from "@/app/models/product";
import { searchCategory } from "@/app/utils/searchCategory";

const Button = ({ btnName, selected, children, ...buttonProps }: any) => {
  return (
    <button
      {...buttonProps}
      className={`${
        selected === btnName
          ? "text-stone-400 border-stone-400"
          : "border-white text-white"
      } w-[110px] text-lg rounded border-2  p-2 m-1 hover:text-stone-400 `}
    >
      {children}
    </button>
  );
};

export type Categories =
  | "camisetas"
  | "canguros"
  | "gorras"
  | "tazas"
  | "todos"
  | "";

export default function Catalogue() {
  const [category, setCategory] = React.useState<Categories | "">("todos");
  const changeCategory = (cat: Categories) => {
    setCategory(cat);
  };
  React.useEffect(() => {
    const resp = searchCategory("camisetas");
  }, [category]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-white text-xl m-2">Elige lo que quieras ver</h3>
      <ul className="flex">
        <li>
          <Button
            onClick={() => {
              console.log("MARIAAA");
              changeCategory("camisetas");
            }}
            btnName="camisetas"
            selected={category}
          >
            Camisetas
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              console.log("MARIAAA");
              changeCategory("canguros");
            }}
            selected={category}
            btnName="canguros"
          >
            Canguros
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              console.log("MARIAAA");
              changeCategory("gorras");
            }}
            selected={category}
            btnName="gorras"
          >
            Gorras
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              console.log("MARIAAA");
              changeCategory("tazas");
            }}
            selected={category}
            btnName="tazas"
          >
            Tazas
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              console.log("MARIAAA");
              changeCategory("todos");
            }}
            selected={category}
            btnName="todos"
            name="todos"
          >
            Todos
          </Button>
        </li>
      </ul>
    </div>
  );
}
