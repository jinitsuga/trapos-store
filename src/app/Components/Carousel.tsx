"use client";
import * as React from "react";
import Image from "next/image";

type ImagesList = string[];

const changeImage = (
  images: ImagesList,
  currentImg: number,
  setter: Function
) => {
  if (currentImg < images.length - 1) {
    setter(currentImg + 1);
  } else {
    setter(0);
  }
};

export default function Carousel({ images }: { images: ImagesList }) {
  const [imageCount, setImageCount] = React.useState<number>(0);
  console.log(imageCount);

  console.log(images);
  return (
    <div className="w-[400px] min-w-[300px] flex flex-col mr-10">
      <div
        className={`relative overflow-hidden rounded-[4.75%_/_3.5%] after:block after:pb-[140%] w-full
}`}
      >
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={images[imageCount]}
          fill
          alt={"Photo of the product"}
        />
      </div>
      <ul className="flex w-full justify-around">
        <li>
          <button className="h-8 w-8 text-white text-3xl">⇐</button>
        </li>
        <li>
          <button
            className="h-8 w-8 text-white text-3xl"
            onClick={() => {
              console.log("clicked");
              changeImage(images, imageCount, setImageCount);
            }}
          >
            ⇒
          </button>
        </li>
      </ul>
    </div>
  );
}
