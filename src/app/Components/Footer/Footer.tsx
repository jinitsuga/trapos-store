import * as React from "react";
import { Navbar } from "../Header/Navbar";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="fixed mt-auto left-0 bottom-0  w-full bg-trapo-brown">
      <div className="flex justify-around items-center h-full w-full">
        <Navbar vertical />
        <span className="">La Paloma, Uruguay</span>
        <a
          target="_blank"
          href={`https://wa.me/${process.env.PHONE}?text=Hola%21%20Te%20escribo%20desde%20tu%20website%20por%20una%20consulta...`}
        >
          <Image
            alt="whatsapp icon"
            height={50}
            width={50}
            src={"/wsappIcon.png"}
          ></Image>
        </a>
      </div>
    </footer>
  );
}
