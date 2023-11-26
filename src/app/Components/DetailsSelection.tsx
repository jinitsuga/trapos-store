"use client";
import * as React from "react";
import { Product } from "./Dashboard/ProductUploads";
import { Color } from "./Dashboard/ProductUploads";
import { capitalize } from "../utils/helpers";
import { useCartStore } from "../data/stateStore";

export type SelectedProduct = {
  name?: string;
  color?: Color[];
  size?: string[];
  price?: number;
  img?: string[];
  selectedColor?: Color;
  selectedSize?: string;
};

export default function Selection({ name, color, size, price, img }: Product) {
  const [selectedProduct, setSelectedProduct] = React.useState<
    SelectedProduct | undefined
  >(undefined);

  React.useEffect(() => {
    setSelectedProduct({
      name: name,
      color: color,
      size: size,
      price: price,
      img: img,
    });
  }, []);

  const cart = useCartStore((state) => state.products);
  const updateCart = useCartStore((state) => state.addProduct);

  const findColor = (colorName: string, colors?: Color[]) =>
    colors?.find((item) => item.name === colorName);

  const colorOptions = color?.map((color, id) => {
    return (
      <option
        className={`${
          color.name === "black" ? "text-white" : "text-black"
        } rounded`}
        style={{ backgroundColor: color.hex, color: "black" }}
        key={id}
        value={color.name}
      >
        {capitalize(color.name)}
      </option>
    );
  });

  const sizeOptions = size?.map((size, id) => {
    return (
      <option value={size} className="rounded text-black" key={id}>
        {size}
      </option>
    );
  });

  return (
    <form className="flex flex-col justify-center">
      <label htmlFor="selectedColor">Color: </label>
      <select
        onChange={(e) => {
          const colorObj = findColor(e.target.value, color);
          setSelectedProduct({ ...selectedProduct, selectedColor: colorObj });
        }}
        style={{
          backgroundColor: selectedProduct?.selectedColor
            ? selectedProduct.selectedColor.hex
            : "",
        }}
        className={`text-black w-28 h-10 m-2 rounded p-2 text-left`}
        name="selectedColor"
      >
        {colorOptions}
      </select>
      <label htmlFor="selectedSize">Tamaño: </label>
      <select
        onChange={(e) => {
          setSelectedProduct({
            ...selectedProduct,
            selectedSize: e.target.value,
          });
        }}
        className="w-24 h-10 m-2 rounded text-black p-2"
      >
        {sizeOptions}
      </select>
      <button
        onClick={(e) => {
          e.preventDefault();
          updateCart([...cart, { ...selectedProduct, quantity: 1 }]);
        }}
        className="rounded bg-white  text-black max-w-sm m-2 p-2"
      >
        Add to cart
      </button>
    </form>
  );
}
