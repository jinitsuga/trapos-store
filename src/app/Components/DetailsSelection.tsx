"use client";
import * as React from "react";
import { Product } from "./Dashboard/ProductUploads";
import { Color } from "./Dashboard/ProductUploads";
import { capitalize } from "../utils/helpers";
import { useCartStore } from "../data/stateStore";
import Link from "next/link";

export type SelectedProduct = {
  name?: string;
  color?: Color[];
  size?: string[];
  kidSize?: string[];
  price?: number;
  img?: string[];
  selectedColor?: Color;
  selectedSize?: string;
};

export default function Selection({
  name,
  color,
  size,
  kidSize,
  price,
  img,
}: Product) {
  const [selectedProduct, setSelectedProduct] = React.useState<
    SelectedProduct | undefined
  >(undefined);
  const [productAdded, setProductAdded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setSelectedProduct({
      name: name,
      color: color,
      size: size,
      kidSize: kidSize,
      price: price,
      img: img,
      selectedColor: color && color[0],
      selectedSize: size && size[0],
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
          color.name === "negro" ? "text-white" : "text-black"
        } rounded`}
        style={{
          backgroundColor: color.hex,
          color: color.name === "negro" ? "white" : "black",
        }}
        key={id}
        value={color.name}
      >
        {capitalize(color.name)}
      </option>
    );
  });

  const allSizes = [...size!, ...kidSize!];
  const sizeOptions = allSizes
    ?.sort((a: any, b: any) => b - a)
    .map((size, id) => {
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
      {!productAdded ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setProductAdded(true);

            if (localStorage.getItem("cart")) {
              const localCart = JSON.parse(localStorage.getItem("cart")!);
              updateCart([...localCart, { ...selectedProduct, quantity: 1 }]);
            } else {
              updateCart([...cart, { ...selectedProduct, quantity: 1 }]);
            }
          }}
          className="rounded bg-white mt-4 hover:text-trapo-green  text-black max-w-[150px] m-2 p-2"
        >
          Agregar
        </button>
      ) : (
        <div className="flex flex-col">
          <p className="mb-4 text-stone-300">Producto agregado!</p>
          <Link
            className="text-stone-100 text-xl hover:text-trapo-green"
            href={"/tienda"}
          >
            → Volver a la tienda
          </Link>
          <Link
            className="text-stone-100 text-xl hover:text-trapo-green"
            href={"/cart"}
          >
            → Ver carrito
          </Link>
        </div>
      )}
    </form>
  );
}
