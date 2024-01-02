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
  const productCards =
    products.length &&
    products.map((prod: Product, id: number) => {
      return (
        <Suspense fallback={<p>Cargando...</p>}>
          <ProductCard key={id} {...prod} />
        </Suspense>
      );
    });

  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <div className="flex max-w-[650px] items-center justify-center flex-wrap mb-40 gap-4">
        {products.length ? (
          productCards
        ) : (
          <p>No hay {slug} disponibles en este momento</p>
        )}
      </div>
    </div>
  );
}
