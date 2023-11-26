"use client";
import * as React from "react";
import { useCartStore } from "@/app/data/stateStore";
import CartProduct from "./CartProduct";

export default function Cart() {
  const cartContents = useCartStore((state) => state.products);
  console.log(cartContents);

  const productCards =
    cartContents &&
    cartContents.map((prod, id) => {
      return <CartProduct key={id} {...prod}></CartProduct>;
    });

  if (!cartContents.length) {
    return (
      <div className="w-[50%] text-white text-xl">
        No parece haber productos en tu carrito.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-4 bg-stone-300 rounded">
      <div className=" flex flex-col gap-2"> {productCards}</div>
    </div>
  );
}
