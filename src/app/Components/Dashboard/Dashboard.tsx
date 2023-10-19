"use client";
import * as React from "react";
import Uploads from "./ProductUploads";

type Displays = "upload" | "catalogue";

export default function Dashboard() {
  const [display, setDisplay] = React.useState<Displays>("upload");

  const changeDisplay = (option: Displays) => {
    return setDisplay(option);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <ul className="flex gap-8 text-white text-xl p-4 mt-10">
        <li>
          <button
            onClick={() => {
              changeDisplay("upload");
            }}
            className="w-[175px] rounded border-2 border-white p-2  hover:text-stone-400"
          >
            Subir productos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              changeDisplay("catalogue");
            }}
            className=" w-[175px] rounded border-2 border-white p-2 hover:text-stone-400"
          >
            Ver catálogo
          </button>
        </li>
      </ul>
      {display == "upload" && <Uploads />}
    </section>
  );
}
