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

export default function Dashboard() {
  const [product, setProduct] = React.useState<Product>({
    name: "",
    description: "",
    price: 0,
    type: "",
    img: "",
  });
  console.log(product);
  const updateProduct = (e: React.FormEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value });
  };

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
            }}
            className=""
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              console.log(res && res[0].url);
              setProduct({ ...product, img: res && res[0].url });
              console.log("file uploaded");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </>
      )}
      {product.img !== "" && (
        <div>
          <Image
            src={product.img ? product.img : ""}
            alt="uploaded image"
          ></Image>
          <form></form>
        </div>
      )}
    </section>
  );
}
