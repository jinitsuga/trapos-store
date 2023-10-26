import * as React from "react";
import { Product } from "../Dashboard/ProductUploads";
import Image from "next/image";

export default function ProductCard({
  img,
  name,
  price,
  description,
  type,
}: Product) {
  return (
    <div>
      <Image alt={`Imagen de ${name}`} src={img!}></Image>
      <div>
        <span>{type}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>Precio: ${price}</span>
      </div>
    </div>
  );
}
