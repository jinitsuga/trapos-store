"use client";
import * as React from "react";
import { Product } from "./Dashboard/ProductUploads";
import { Color } from "./Dashboard/ProductUploads";
import { capitalize } from "../utils/helpers";

type SelectedProduct = {
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
  console.log(selectedProduct);

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
  return (
    <form>
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
        className={`text-black w-24 h-10 m-2 rounded p-2 text-left`}
        name="selectedColor"
      >
        {colorOptions}
      </select>
    </form>
  );
}
