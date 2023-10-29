"use client";
import * as React from "react";
import { Product } from "../Dashboard/ProductUploads";
import Image from "next/image";
import EditModal from "./EditModal";

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

  //   import Image from 'next/image'

  // import { Image as ImageType } from 'lib/shopify/types'

  // export default function ProductImage({ image, shadow = true }: { image: ImageType, shadow?: boolean }) {
  //   const { url, altText } = image
  //   return (
  //     <div className={`relative overflow-hidden rounded-[4.75%_/_3.5%] after:block after:pb-[140%] w-full ${shadow ? 'shadow-md' : ''}`}>
  //       <Image className="absolute top-0 left-0 h-full w-full object-cover" src={url} fill alt={altText} />
  //     </div>
  //   )
  // }

  const [showModal, setShowModal] = React.useState<boolean>(false);

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
        <button
          onClick={() => setShowModal(true)}
          className="rounded text-xl border-black border-2 p-1"
        >
          Editar
        </button>
      ) : (
        <button className="rounded border-black border-2 p-1">
          Agregar al carrito
        </button>
      )}
      {showModal && (
        <EditModal
          img={img}
          name={name}
          price={price}
          description={description}
          type={type}
          setModal={setShowModal}
        />
      )}
    </div>
  );
}
