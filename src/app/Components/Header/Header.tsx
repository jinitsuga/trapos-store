import * as React from "react";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header className="flex h-[10%] items-center justify-around font-bold text-xl">
      <div className="flex items-center">
        <span>Logo</span>
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
