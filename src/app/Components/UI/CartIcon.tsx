"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/app/data/stateStore";

export default function CartIcon() {
  const [cartLength, setCartLength] = React.useState<number>(0);
  const cartContents = useCartStore((state) => state.products);

  React.useEffect(() => {
    setCartLength(
      typeof window != "undefined"
        ? localStorage.getItem("cart") &&
            JSON.parse(localStorage.getItem("cart")!).length
        : 0
    );
  }, []);

  return (
    <Link className="flex items-center" href="/cart">
      <Image
        src={"/cartIcon.png"}
        width={50}
        height={50}
        alt="cart icon"
      ></Image>
      {cartLength && <p className="text-xl">({cartLength})</p>}
    </Link>
  );
}
