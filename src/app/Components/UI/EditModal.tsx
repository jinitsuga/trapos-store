"use client";
import * as React from "react";
import { Product } from "../Dashboard/ProductUploads";
import { InputEvents } from "../Dashboard/ProductUploads";

type ModalTypes = Product & {
  setModal: Function;
};

export default function EditModal({ setModal, ...props }: ModalTypes) {
  const [product, setProduct] = React.useState<Product>({
    name: "",
    description: "",
    price: 0,
    type: "",
    img: "",
  });

  React.useEffect(() => {
    const checkForClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        console.log("click trigger");
        // Close modal function
        setModal(false);
      }
    };

    document.addEventListener("click", checkForClickOutside, true);

    return () => {
      console.log("event unmounted");
      document.removeEventListener("click", checkForClickOutside);
    };
  }, []);

  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const updateProduct = (e: InputEvents) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value });
  };
  const inputStyles =
    "text-black rounded p-2 focus:outline-none focus:ring focus:ring-green-700 mb-2";
  return (
    <div className="flex fixed inset-0 items-center justify-center">
      <div ref={modalRef}>
        <form>
          <label htmlFor="name" className="mb-1">
            Nombre del producto:
          </label>
          <input
            value={props.name}
            onChange={(e) => {
              updateProduct(e);
            }}
            className="text-black rounded p-2 focus:outline-none focus:ring focus:ring-green-700 mb-2"
            placeholder="Camiseta One Piece"
            type="text"
            name="name"
          ></input>
          <label htmlFor="price" className="mb-1">
            Precio:
          </label>
          <input
            value={props.price}
            onChange={(e) => {
              updateProduct(e);
            }}
            placeholder="400"
            type="number"
            name="price"
            className={`${inputStyles} w-auto`}
          ></input>
          <label htmlFor="description" className="mb-1">
            Descripción:
          </label>
          <textarea
            value={props.description}
            onChange={(e) => {
              updateProduct(e);
            }}
            placeholder="Describe el producto brevemente"
            className={`${inputStyles}`}
            name="description"
          ></textarea>
          <label htmlFor="category" className="mb-1">
            Categoría:
          </label>
          <select
            value={props.type}
            onChange={(e) => {
              updateProduct(e);
            }}
            className={inputStyles}
            name="type"
          >
            <option value="">--Elige categoría--</option>
            <option value="camisetas">Camisetas</option>
            <option value="canguros">Canguros</option>
            <option value="gorras">Gorras</option>
            <option value="tazas">Tazas</option>
          </select>
        </form>
      </div>
    </div>
  );
}
