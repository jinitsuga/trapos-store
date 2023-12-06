"use client";
import * as React from "react";
import { useCartStore } from "@/app/data/stateStore";
import CartProduct from "./CartProduct";

export default function Cart() {
  const cartContents = useCartStore((state) => state.products);
  const updateCart = useCartStore((state) => state.addProduct);

  React.useEffect(() => {
    localStorage.getItem("cart") &&
      updateCart(JSON.parse(localStorage.getItem("cart")!));
  }, []);

  const totalPrice = cartContents.reduce(
    (accum, current) => accum + current.quantity * current.price!,
    0
  );
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
    <div className="flex flex-col gap-2 p-4 bg-stone-300 rounded mb-40">
      <div className=" flex flex-col gap-2"> {productCards}</div>
      <div className="flex text-xl w-full justify-around text-stone-900">
        <span>Total:</span>
        <span className="font-semibold">${totalPrice}</span>
      </div>
      <a className="self-center" href="/checkout">
        <button className="rounded text-xl  bg-white mt-4 hover:text-stone-400  text-black w-[200px] m-2 p-2">
          Completar orden
        </button>
      </a>
    </div>
  );
}
