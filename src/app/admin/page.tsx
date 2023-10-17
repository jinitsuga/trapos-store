"use client";
import * as React from "react";
import { UploadButton } from "../utils/uploadthing";
import Image from "next/image";

export type Product = {
  name?: string;
  description?: string;
  price?: number;
  type?: string;
  img?: string;
};

type InputEvents =
  | React.FormEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;

export default function Dashboard() {
  const [product, setProduct] = React.useState<Product>({
    name: "",
    description: "",
    price: 0,
    type: "",
    img: "",
  });
  console.log(product);
  const updateProduct = (e: InputEvents) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value });
  };

  const inputStyles =
    "text-black rounded p-2 focus:outline-none focus:ring focus:ring-green-700 mb-2";
  return (
    <section className="flex flex-col text-white justify-center items-center p-8">
      {product.img == "" && (
        <>
          <h3 className="text-2xl mb-4 ">Selecciona la imagen del producto</h3>
          <UploadButton
            content={{
              button({ ready }) {
                if (ready) {
                  return <div>Subir imagen</div>;
                }
              },
              allowedContent({ isUploading }) {
                if (isUploading) return "Subiendo archivo...";
              },
            }}
            className=""
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setProduct({ ...product, img: res && res[0].url });
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </>
      )}
      {/* If image is uploaded, load rest of the form */}
      {product.img !== "" && (
        <div className="flex text-xl flex-col items-center justify-center gap-4">
          <Image
            width={150}
            height={200}
            src={product.img ? product.img : ""}
            alt="uploaded image"
          ></Image>
          <form className="flex flex-col justify-center">
            <label htmlFor="name" className="mb-1">
              Nombre del producto:
            </label>
            <input
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
      )}
    </section>
  );
}
