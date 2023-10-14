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
} | null;

export default function Dashboard() {
  const [product, setProduct] = React.useState<Product>({
    name: "",
    description: "",
    price: 0,
    type: "",
    img: "",
  });

  const updateProduct = (e: React.FormEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <section className="flex flex-col justify-center items-center p-8">
      <UploadButton
        className="border-2 border-white"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />{" "}
    </section>
  );
}
