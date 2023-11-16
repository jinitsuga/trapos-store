import { getProduct } from "@/app/utils/product";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const productData = await getProduct(id);

  const { name, img, description, price } = productData;

  // Add color and size selection buttons by mapping both arrays and rendering these btns.
  return (
    <main className="flex flex-col w-full h-full items-center justify-center  p-2">
      <div className="flex mt-10 w-1/2  justify-center">
        <div className="w-[300px] mr-10"></div>
        <div className="text-gray-200 flex text-xl flex-col gap-4">
          <h3 className="text-3xl font-bold tracking-tight">{name}</h3>
          <p>{description}</p>
          <span>opciones de color</span>
          <span>tamanoklqwelkqjelkwqjlkjeqls</span>
          <span className="text-2xl text-yellow-300">${price}</span>
          <button className="bg-gray-200 text-gray-900 w-[200px] text-xl hover:text-gray-400 tracking-tight rounded p-2">
            Agregar al carrito
          </button>
        </div>
      </div>
    </main>
  );
}
