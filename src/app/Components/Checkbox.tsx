"use client";
import * as React from "react";
import { Product, Color } from "./Dashboard/ProductUploads";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  prodState?: any;
  setter: Function;
  colorName?: string;
  color?: string;
  inputName: string;
};

export default function Checkbox({
  children,
  color,
  prodState,
  inputName,
  setter,
  colorName,
}: Props) {
  const updateData = (
    e: React.FormEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!prodState[inputName].find((item: Color) => item.hex == color)) {
      setter({
        ...prodState,
        [inputName]: [...prodState[inputName], { name: colorName, hex: color }],
      });
    } else {
      const colorIndex = prodState[inputName].findIndex(
        (item: Color) => item.hex == color
      );
      const newColors = prodState[inputName].toSpliced(colorIndex, 1);
      setter({ ...prodState, [inputName]: newColors });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-16">
      <label>{children}</label>
      <input
        className={`h-8 w-8 border-2 border-white hover:cursor-pointer checked:accent-[${color}]`}
        type="checkbox"
      ></input>
    </div>
  );
}
