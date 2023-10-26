import * as React from "react";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header className="flex sticky z-20 top-0 bg-black h-[10%] p-4 items-center justify-around font-bold text-xl">
      <div className="flex items-center">
        <span>Logo</span>
        <Navbar />
      </div>
      <div>
        <ul className="flex gap-2 text-[16px]">
          <li>Cart icon</li>
          <li>
            <a href="/api/auth/signin" className="hover:text-trapo-darkGreen">
              Ingresar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
