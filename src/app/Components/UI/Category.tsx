import * as React from "react";
import Link from "next/link";

export default function Category({ cat }: { cat: string }) {
  const lowerCaseCat = cat.toLowerCase();
  return (
    <div className=" text-white p-2 rounded text-xl">
      <Link href={`/tienda/${lowerCaseCat}`}>
        <p className="hover:text-stone-400">{cat}</p>
      </Link>
    </div>
  );
}
