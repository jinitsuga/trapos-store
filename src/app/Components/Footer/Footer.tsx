import * as React from "react";
import { Navbar } from "../Header/Navbar";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 h-[15%] w-full bg-trapo-brown">
      <div className="flex justify-around items-center h-full w-full">
        <Navbar vertical />
        <span className="">La Paloma, Uruguay</span>
      </div>
    </footer>
  );
}
