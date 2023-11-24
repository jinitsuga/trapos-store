"use client";
import * as React from "react";
import { useCartStore } from "@/app/data/stateStore";

export default function Cart() {
  const cartContents = useCartStore((state) => state.products);

  if (!cartContents.length) {
    return (
      <div className="w-[50%] text-white text-xl">
        No parece haber productos en tu carrito.
      </div>
    );
  }
}
