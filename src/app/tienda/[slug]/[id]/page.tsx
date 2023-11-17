import { getProduct } from "@/app/utils/product";
import Carousel from "@/app/Components/Carousel";
import { Product } from "@/app/Components/Dashboard/ProductUploads";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const productData = await getProduct(id);

  const { name, img, description, price }: Product = productData;
  console.log(img.length);
  // Add color and size selection buttons by mapping both arrays and rendering as btns.
  return (
    <main className="flex flex-col w-full h-full items-center justify-center  p-2">
      <div className="flex mt-10 w-1/2  justify-center">
        <Carousel images={img} />
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
