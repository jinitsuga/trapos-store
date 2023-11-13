import * as React from "react";

import { Product } from "./Dashboard/ProductUploads";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  prodState?: Product;
  setter?: Function;
  color?: string;
};

export default function Checkbox({ children, color }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <label>{children}</label>
      <input
        className={`h-6 w-6 bg-blue checked:accent-${color}`}
        type="checkbox"
      ></input>
    </div>
  );
}
