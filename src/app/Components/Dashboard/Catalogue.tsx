"use client";
import * as React from "react";

const Button = ({ children, ...buttonProps }: any) => {
  return (
    <button
      {...buttonProps}
      className="w-[110px] text-lg rounded text-white border-2 border-white p-2 m-1 hover:text-stone-400"
    >
      {children}
    </button>
  );
};

type Categories = "camisetas" | "canguros" | "gorras" | "tazas" | "todos";

export default function Catalogue() {
  const [category, setCategory] = React.useState<Categories | "">("");

  const changeCategory = (cat: Categories) => {
    setCategory(cat);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-white text-xl m-2">Elige lo que quieras ver</h3>
      <ul className="flex">
        <li>
          <Button
            onClick={() => {
              console.log("MARIAAA");
            }}
          >
            Camisetas
          </Button>
        </li>
        <li>
          <Button>Canguros</Button>
        </li>
        <li>
          <Button>Gorras</Button>
        </li>
        <li>
          <Button>Tazas</Button>
        </li>
        <li>
          <Button>Todos</Button>
        </li>
      </ul>
    </div>
  );
}
