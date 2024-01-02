"use client";
import * as React from "react";
import { Product } from "@/app/Components/Dashboard/ProductUploads";
import ProductCard from "@/app/Components/UI/ProductCard";
import { Suspense } from "react";
import { tshirtTags } from "@/app/data/data";

type DisplayType = {
  products: Product[];
  slug: string;
};

export default function ProductsDisplay({ products, slug }: DisplayType) {
  const [prods, setProds] = React.useState<Product[] | undefined>();
  const [selectedTag, setSelectedTag] = React.useState<string>("todas");
  console.log(selectedTag);

  React.useEffect(() => {
    setProds(products);
  }, []);

  const productCards =
    selectedTag == "todas"
      ? prods?.length &&
        prods.map((prod: Product, id: number) => {
          return (
            <Suspense key={id} fallback={<p>Cargando...</p>}>
              <ProductCard key={id} {...prod} />
            </Suspense>
          );
        })
      : prods?.length &&
        prods
          .filter((prod) => prod.subType == selectedTag)
          .map((prod: Product, id: number) => {
            return (
              <Suspense key={id} fallback={<p>Cargando...</p>}>
                <ProductCard key={id} {...prod} />
              </Suspense>
            );
          });

  const tags = tshirtTags.sort().map((tag, id) => {
    return (
      <li
        className={`rounded ${
          selectedTag === tag
            ? "bg-black text-stone-100 ring-2 ring-stone-100"
            : "bg-white"
        } text-black p-[4px]`}
        key={id}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            setSelectedTag(tag);
          }}
          key={id}
        >
          {tag}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center  w-full">
      {slug === "camisetas" && (
        <ul className="flex flex-wrap items-center justify-center gap-2 mb-2 max-w-md">
          {tags}
        </ul>
      )}
      <div className="flex flex-col items-center justify-center  w-full">
        <div className="flex max-w-[650px] items-center justify-center flex-wrap mb-40 gap-4">
          {products.length ? (
            productCards
          ) : (
            <p>No hay {slug} disponibles en este momento</p>
          )}
        </div>
      </div>
    </div>
  );
}
