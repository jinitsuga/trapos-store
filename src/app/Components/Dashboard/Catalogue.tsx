"use client";
import * as React from "react";
import useSWR from "swr";
import fetcher from "@/app/utils/fetcher";
import ProductCard from "../UI/ProductCard";
import { Product } from "./ProductUploads";

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

// Tal vez explorar como deshabilitar el caching automatico de data

export default function Catalogue() {
  const [category, setCategory] = React.useState<Categories | "">("todos");
  const { data, error, isLoading }: any = useSWR(
    `/../api/categories?cat=${category}`,
    fetcher
  );
  console.log(data.prods);
  const products =
    data &&
    data.prods.map((item: Product, id: number) => {
      return <ProductCard key={id} {...item} admin={true} />;
    });

  const changeCategory = (cat: Categories) => {
    setCategory(cat);
  };
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <h3 className="text-white text-xl m-2">Elige lo que quieras ver</h3>
      <ul className="flex mb-8">
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
      {error && <span>Ha ocurrido un error.</span>}
      {isLoading && <div> Cargando... </div>}
      {data ? (
        <div className="flex max-w-[650px] items-center justify-center flex-wrap mb-40 gap-4">
          {" "}
          {products}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
