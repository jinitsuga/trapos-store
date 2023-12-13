"use client";
import * as React from "react";
import { CartProduct } from "@/app/data/stateStore";

type PayButtonProps = {
  products: CartProduct[];
};

export const PayButton = ({ products }: PayButtonProps) => {
  const [url, setUrl] = React.useState<string | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const genLink = async () => {
      setLoading(true);

      try {
        const resp = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(products),
        }).then((res) => res.json());

        setUrl(resp.data);
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
          className="rounded self-center text-xl  bg-white mt-4  text-black w-[200px] m-2 p-2"
        >
          Espera...
        </button>
      ) : (
        <a
          href={url}
          className="rounded text-center self-center text-xl hover:text-trapo-green bg-white mt-4  text-black w-[200px] m-2 p-2"
        >
          Completar pago
        </a>
      )}
    </>
  );
};
