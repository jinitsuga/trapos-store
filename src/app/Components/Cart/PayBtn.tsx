"use client";
import * as React from "react";
import { CartProduct } from "@/app/data/stateStore";

type PayButtonProps = {
  products: CartProduct[];
};

export const PayButton = ({ products }: PayButtonProps) => {
  const [url, setUrl] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const genLink = async () => {
      setLoading(true);

      try {
        const resp = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(products),
        });

        setUrl(resp.url);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    genLink();
  }, [products]);

  return (
    <>
      {loading ? (
        <button
          disabled
          className="rounded text-xl  bg-white mt-4  text-black w-[200px] m-2 p-2"
        >
          Espera...
        </button>
      ) : (
        <a
          href={url!}
          className="rounded text-xl  bg-white mt-4 hover:text-stone-400  text-black w-[200px] m-2 p-2"
        >
          Completar orden
        </a>
      )}
    </>
  );
};
