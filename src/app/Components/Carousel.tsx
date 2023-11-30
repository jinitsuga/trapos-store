"use client";
import * as React from "react";
import Image from "next/image";
import { Suspense } from "react";

type ImagesList = string[];

const changeImage = (
  images: ImagesList,
  currentImg: number,
  setter: Function,
  increase?: boolean
) => {
  if (increase) {
    if (currentImg < images.length - 1) {
      setter(currentImg + 1);
    } else {
      setter(0);
    }
  } else {
    if (currentImg > 0) {
      setter(currentImg - 1);
    } else {
      setter(images.length - 1);
    }
  }
};

export default function Carousel({ images }: { images: ImagesList }) {
  const [imageCount, setImageCount] = React.useState<number>(0);

  return (
    <div className="w-[400px] min-w-[300px] flex flex-col mr-10">
      <div
        className={`relative overflow-hidden rounded-[4.75%_/_3.5%] after:block after:pb-[140%] w-full
}`}
      >
        <Suspense fallback={<span>Cargando...</span>}>
          <Image
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={images[imageCount]}
            fill
            alt={"Photo of the product"}
          />
        </Suspense>
      </div>
      <ul className="flex w-full justify-around">
        <li>
          <button
            onClick={() => {
              changeImage(images, imageCount, setImageCount);
            }}
            className="h-8 w-8 text-white text-3xl"
          >
            ⇐
          </button>
        </li>
        <li>
          <button
            className="h-8 w-8 text-white text-3xl"
            onClick={() => {
              changeImage(images, imageCount, setImageCount, true);
            }}
          >
            ⇒
          </button>
        </li>
      </ul>
    </div>
  );
}
