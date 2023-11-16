"use client";
import * as React from "react";
import Image from "next/image";

type ImagesList = string[];

const changeImage = (
  images: ImagesList,
  currentImg: number,
  setter: Function
) => {
  if (currentImg < images.length) {
    setter(currentImg++);
  } else {
    setter(0);
  }
};

export default function Carousel(images: ImagesList) {
  const [imageCount, setImageCount] = React.useState<number>(0);

  return (
    <div
      className={`relative overflow-hidden rounded-[4.75%_/_3.5%] after:block after:pb-[140%] w-full
}`}
    >
      <Image
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={images[imageCount]}
        fill
        alt={`Imagen de ${name}`}
      />
      <ul>
        <li>
          <button>{"<"}</button>
        </li>
        <li>
          <button>{">"}</button>
        </li>
      </ul>
    </div>
  );
}
