"use client";
import * as React from "react";
import Uploads from "./ProductUploads";
import Catalogue from "./Catalogue";

type Displays = "upload" | "catalogue";

export default function Dashboard() {
  const [display, setDisplay] = React.useState<Displays>("upload");

  const changeDisplay = (option: Displays) => {
    return setDisplay(option);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <ul className="flex gap-8 text-white text-lg p-4 mt-10">
        <li>
          <button
            onClick={() => {
              changeDisplay("upload");
            }}
            className={`${
              display == "upload" ? "text-stone-400 border-stone-400" : ""
            } w-[175px] rounded border-2 border-white p-2 hover:text-stone-400`}
          >
            Subir productos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              changeDisplay("catalogue");
            }}
            className={`${
              display == "catalogue" ? "text-stone-400 border-stone-400" : ""
            } w-[175px] rounded border-2 border-white p-2 hover:text-stone-400`}
          >
            Ver catálogo
          </button>
        </li>
      </ul>
      {display == "upload" && <Uploads />}
      {display == "catalogue" && <Catalogue />}
    </section>
  );
}
