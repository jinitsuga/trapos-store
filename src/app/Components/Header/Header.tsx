import * as React from "react";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header className="flex h-[10%] items-center justify-around bg-pink-400">
      <div>
        <span>Trapos logo</span>
        <Navbar />
      </div>
      <div>
        <ul>
          <li>Cart icon</li>
        </ul>
      </div>
    </header>
  );
}
