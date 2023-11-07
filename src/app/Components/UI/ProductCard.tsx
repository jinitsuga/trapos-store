"use client";
import * as React from "react";
import { Product } from "../Dashboard/ProductUploads";
import Link from "next/link";
import Image from "next/image";
import EditModal from "./EditModal";
import { getProduct } from "@/app/utils/product";

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
  console.log(window.location.href);
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_URL}/tienda/${type}/${_id}`}
      className="rounded flex text-black bg-white items-center pb-2 gap-2 border-2 w-[300px] 
      hover:shadow-lg hover:shadow-green-800 justify-center flex-col"
    >
      {/* <Image
        width={300}
        height={175}
        className="justify-self-start h-auto max-w-[300px]"
        alt={`Imagen de ${name}`}
        src={img!}
      ></Image> */}
      <div
        className={`relative overflow-hidden rounded-[4.75%_/_3.5%] after:block after:pb-[140%] w-full
        }`}
      >
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={img!}
          fill
          alt={`Imagen de ${name}`}
        />
      </div>
      <div className="text-left flex flex-col gap-2 ml-4 w-full">
        <span className="text-stone-500 text-sm">{type}</span>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-[14px] h-[65px]">{description}</p>
        <span className="text-yellow-700 text-xl">${price}</span>
      </div>
      {admin ? (
        <button
          onClick={() => setShowModal(true)}
          className="rounded hover:bg-black hover:text-white text-xl border-black border-2 mb-2 p-1"
        >
          Editar
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            getProduct(_id!);
          }}
          className="rounded border-black border-2 mb-2 p-1"
        >
          Ver mas
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
          _id={_id}
        />
      )}
    </Link>
  );
}
