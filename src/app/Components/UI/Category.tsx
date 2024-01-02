import * as React from "react";
import Link from "next/link";
import { capitalize } from "@/app/utils/helpers";

export default function Category({ cat }: { cat: string }) {
  const lowerCaseCat = cat.toLowerCase();
  return (
    <div className=" text-white p-2 rounded text-xl">
      <Link href={`/tienda/${lowerCaseCat}`}>
        <p className="hover:text-stone-400">{capitalize(cat)}</p>
      </Link>
    </div>
  );
}
