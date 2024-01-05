"use client";
import * as React from "react";
import { CartProduct } from "@/app/data/stateStore";
import Image from "next/image";
import { capitalize } from "@/app/utils/helpers";
import { useCartStore } from "@/app/data/stateStore";

export default function CartProduct({
  name,
  selectedColor,
  selectedSize,
  price,
  quantity,
  img,
}: CartProduct) {
  const cartContents = useCartStore((state) => state.products);

  const updateCart = useCartStore((state) => state.addProduct);

  const findProductId = (
    name: string | undefined,
    color: CartProduct["selectedColor"],
    size: CartProduct["selectedSize"],
    item: CartProduct
  ) => {
    if (
      name == item.name &&
      color?.name === item.selectedColor?.name &&
      size === item.selectedSize
    ) {
      return true;
    }
  };

  return (
    <div className="sm:w-[500px] mb-2 border-b-2 pb-4 border-stone-800 text-black flex flex-col sm:flex-row max-[640px]:items-center max-[640px]:justify-center sm:gap-2">
      <button
        onClick={(e) => {
          const index = cartContents.findIndex((item) => {
            return findProductId(name, selectedColor, selectedSize, item);
          });
          const newCart = cartContents.toSpliced(index, 1);
          updateCart(newCart);
        }}
        className="text-3xl h-10 self-center hover:text-red-800"
      >
        ⓧ
      </button>
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
      <div className="flex flex-col self-center  items-center sm:ml-auto">
        <span className="text-yellow-800 text-xl">
          ${price && price * quantity}
        </span>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              const index = cartContents.findIndex((item) => {
                return findProductId(name, selectedColor, selectedSize, item);
              });

              if (cartContents[index].quantity <= 1) {
                return;
              }

              const prevProd = cartContents[index];
              const newProd = {
                ...prevProd,
                quantity: prevProd.quantity - 1,
              };
              const newCart = cartContents.toSpliced(index, 1, newProd);
              updateCart(newCart);
            }}
          >
            {"<"}
          </button>
          <div className="bg-stone-100 p-2 rounded h-8 text-center w-8">
            {quantity}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              const index = cartContents.findIndex((item) => {
                return findProductId(name, selectedColor, selectedSize, item);
              });
              const prevProd = cartContents[index];
              const newProd = {
                ...prevProd,
                quantity: prevProd.quantity + 1,
              };
              const newCart = cartContents.toSpliced(index, 1, newProd);
              updateCart(newCart);
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
