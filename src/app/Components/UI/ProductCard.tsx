import * as React from "react";
import { Product } from "../Dashboard/ProductUploads";
import Image from "next/image";

type CardTypes = Product & { admin?: boolean };

export default function ProductCard({
  img,
  name,
  price,
  description,
  type,
  admin,
  _id,
}: CardTypes) {
  console.log(_id);
  return (
    <div className="rounded flex text-black bg-white items-center gap-4 border-2 pb-4 px-4 w-[300px] justify-center flex-col">
      <Image
        width={300}
        height={175}
        className="justify-self-start h-auto max-w-[300px]"
        alt={`Imagen de ${name}`}
        src={img!}
      ></Image>
      <div className="text-left flex flex-col gap-2 w-full">
        <span className="text-stone-400 text-sm">{type}</span>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-[16px]">{description}</p>
        <span className="text-yellow-700 text-xl">${price}</span>
      </div>
      {admin ? (
        <button className="rounded text-xl border-black border-2 p-1">
          Editar
        </button>
      ) : (
        <button className="rounded border-black border-2 p-1">
          Agregar al carrito
        </button>
      )}
    </div>
  );
}
