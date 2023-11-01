import * as React from "react";
import Link from "next/link";

export default function Category({ cat }: { cat: string }) {
  const lowerCaseCat = cat.toLowerCase();
  return (
    <div className="border-2 border-white text-white p-4 rounded text-xl">
      <Link href={`/tienda/${lowerCaseCat}`}>
        <h3>{cat}</h3>
      </Link>
    </div>
  );
}
