"use client";
import * as React from "react";
import { Product } from "../Dashboard/ProductUploads";
import { InputEvents } from "../Dashboard/ProductUploads";
import { deleteProduct, patchProduct } from "@/app/utils/product";

type ModalTypes = Product & {
  setModal: Function;
};

export default function EditModal({ ...props }: ModalTypes) {
  const [product, setProduct] = React.useState<Product>({
    name: props.name,
    description: props.description,
    price: props.price,
    type: props.type,
    img: props.img,
  });
  const [showDelete, setShowDelete] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkForClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        // Close modal function
        props.setModal(false);
      }
    };

    document.addEventListener("click", checkForClickOutside, true);

    return () => {
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
    <div className="flex fixed inset-0 items-center z-20 justify-center">
      <div ref={modalRef}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await patchProduct(product, props._id!);
            props.setModal(false);
          }}
          className="flex flex-col gap-2 p-4 rounded border-2 border-white bg-trapo-black text-white"
        >
          <label htmlFor="name" className="mb-1">
            Nombre del producto:
          </label>
          <input
            value={product.name}
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
            value={product.price}
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
            value={product.description}
            onChange={(e) => {
              updateProduct(e);
            }}
            placeholder="Describe el producto brevemente"
            className={`${inputStyles}`}
            name="description"
            maxLength={120}
          ></textarea>
          <label htmlFor="category" className="mb-1">
            Categoría:
          </label>
          <select
            value={product.type}
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
          <button
            type="submit"
            className="rounded self-center bg-white text-black w-[80%] text-xl border-black border-2 p-1"
          >
            Hecho
          </button>

          {!showDelete ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowDelete(true);
              }}
              className="rounded self-center text-center bg-red-500 text-black h-10 w-[40%] 
              text-sm border-black border-2 p-1"
            >
              Eliminar
            </button>
          ) : (
            <ul className="flex items-center justify-center m-2 self-center gap-6">
              Seguro?
              <li>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    await deleteProduct(props._id!);
                    props.setModal(false);
                  }}
                  className="bg-red-500 p-2 w-10"
                >
                  Si
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDelete(false);
                  }}
                  className="border-2 border-white p-2"
                >
                  No
                </button>
              </li>
            </ul>
          )}
        </form>
      </div>
    </div>
  );
}
