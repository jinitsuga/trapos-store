import * as React from "react";

export function Navbar() {
  return (
    <nav className="mx-2 text-base font-medium">
      <ul className="flex bg-trapo-brown p-2 rounded">
        <li className="mx-4 hover:text-trapo-darkGreen">
          <a href="#">Tienda</a>
        </li>
        <li className="mx-4 hover:text-trapo-darkGreen">
          <a href="#">Contacto</a>
        </li>
        <li className="mx-4 hover:text-trapo-darkGreen">
          <a href="#">Sobre nosotros</a>
        </li>
      </ul>
    </nav>
  );
}
