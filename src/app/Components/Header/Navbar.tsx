import * as React from "react";

type NavTypes = {
  vertical?: boolean;
};

export function Navbar({ vertical }: NavTypes) {
  return (
    <nav className="mx-2 text-base font-medium">
      <ul
        className={`flex ${
          vertical == true ? "flex-col" : ""
        } bg-trapo-brown p-2 rounded`}
      >
        <li className="mx-4 hover:text-stone-200">
          <a href="/tienda">Tienda</a>
        </li>
        <li className="mx-4 hover:text-stone-200">
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
