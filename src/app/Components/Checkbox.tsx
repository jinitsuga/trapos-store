"use client";
import * as React from "react";

import { Product } from "./Dashboard/ProductUploads";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  prodState?: Product;
  setter?: Function;
  color?: string;
};

export default function Checkbox({ children, color }: Props) {
  let bgColor = `checked:accent-${color}`;

  if (color == "azul") {
    bgColor = "#84cc16";
  } else if (color == "rojo") {
    bgColor = "#22c55e";
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <label>{children}</label>
      <input
        className={`h-8 w-8 border-2 border-white hover:cursor-pointer ${
          color ? bgColor : ""
        }`}
        type="checkbox"
      ></input>
    </div>
  );
}
