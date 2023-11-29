"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/app/data/stateStore";

export default function CartIcon() {
  const cartContents = useCartStore((state) => state.products);

  const cartLength =
    localStorage.getItem("cart") &&
    JSON.parse(localStorage.getItem("cart")!).length;

  return (
    <Link className="flex items-center" href="/cart">
      <Image
        src={"/cartIcon.png"}
        width={50}
        height={50}
        alt="cart icon"
      ></Image>
      {cartLength && <span className="text-xl">({cartLength})</span>}
    </Link>
  );
}
