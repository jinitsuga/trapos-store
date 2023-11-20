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
  size?: string;
  style?: React.CSSProperties;
};

export default function Checkbox({
  children,
  color,
  prodState,
  inputName,
  setter,
  colorName,
  style,
  size,
}: Props) {
  const updateData = (
    e: React.FormEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (color) {
      if (!prodState[inputName].find((item: Color) => item.hex == color)) {
        setter({
          ...prodState,
          [inputName]: [
            ...prodState[inputName],
            { name: colorName, hex: color },
          ],
        });
      } else {
        const colorIndex = prodState[inputName].findIndex(
          (item: Color) => item.hex == color
        );
        const newColors = prodState[inputName].toSpliced(colorIndex, 1);
        setter({ ...prodState, [inputName]: newColors });
      }
    } else {
      if (!prodState[inputName].find((item: string) => item == size)) {
        setter({
          ...prodState,
          [inputName]: [...prodState[inputName], size],
        });
      } else {
        const sizeId = prodState[inputName].findIndex(
          (item: string) => item == size
        );
        const newSizes = prodState[inputName].toSpliced(sizeId, 1);
        setter({ ...prodState, [inputName]: newSizes });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-16">
      <label>{children}</label>
      <input
        onChange={(e) => {
          updateData(e, e.target.checked);
        }}
        style={style}
        className={`h-8 w-8 border-2 text-emerald-400 border-white hover:cursor-pointer`}
        type="checkbox"
      ></input>
    </div>
  );
}
