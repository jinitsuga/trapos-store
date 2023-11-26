"use client";
import * as React from "react";
import { CartProduct } from "@/app/data/stateStore";
import Image from "next/image";
import { capitalize } from "@/app/utils/helpers";

export default function CartProduct({
  name,
  selectedColor,
  selectedSize,
  price,
  quantity,
  img,
}: CartProduct) {
  const increaseQty = () => {};
  return (
    <div className="w-[500px] text-black flex gap-2">
      <div className="flex">
        <Image
          className="border-2 border-stone-400 rounded"
          height={125}
          width={125}
          alt="picture of product"
          src={img![0]}
        ></Image>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <span className="tracking-tighter text-xl font-bold">{name}</span>
          <div className="flex items-center justify-start">
            <span className="inline-block rounded  p-2">
              {capitalize(selectedColor?.name)}
            </span>
            <div
              className="w-[30px] h-[30px] rounded"
              style={{ backgroundColor: selectedColor?.hex }}
            ></div>
          </div>
          <span className="inline-block p-2 text-lg font-semibold">
            {selectedSize}
          </span>
        </div>
      </div>
      <div className="flex flex-col self-center  items-center justify-self-end">
        <span>${price && price * quantity}</span>
        <div className="flex gap-2">
          <button>{"<"}</button>
          <div className="bg-stone-100 p-2 rounded h-8 text-center w-8">
            {quantity}
          </div>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}
