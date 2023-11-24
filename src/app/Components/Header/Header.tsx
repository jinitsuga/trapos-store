import * as React from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import AuthBtn from "./SignButton";

export default function Header() {
  return (
    <header className="flex sticky z-20 top-0 bg-black h-[10%] p-4 items-center justify-around font-bold text-xl">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={"/traposlogo.png"}
            width={50}
            height={50}
            alt="trapos locos logo"
          ></Image>
        </Link>
        <Navbar />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4 text-[16px]">
          <li>
            <Link href="/cart">
              <Image
                src={"/cartIcon.png"}
                width={50}
                height={50}
                alt="cart icon"
              ></Image>
            </Link>
          </li>
          <li>
            <AuthBtn />
          </li>
        </ul>
      </div>
    </header>
  );
}
