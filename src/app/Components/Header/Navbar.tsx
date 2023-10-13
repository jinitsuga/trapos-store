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
        <li className="mx-4 hover:text-trapo-darkGreen">
          <a href="#">Tienda</a>
        </li>
        <li className="mx-4 hover:text-trapo-darkGreen">
          <a href="#">Contacto</a>
        </li>
        <li className="mx-4 hover:text-trapo-darkGreen">
          <a href="#">Acerca de</a>
        </li>
      </ul>
    </nav>
  );
}
