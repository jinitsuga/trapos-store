import Carousel from "@/app/Components/Carousel";
import { Product } from "@/app/Components/Dashboard/ProductUploads";
import Selection from "@/app/Components/DetailsSelection";
import api from "@/app/utils/api";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const productData: Product = await api.product.getProduct(id);

  const { name, img, description, price, color, size, kidSize }: Product =
    productData;
  // Add color and size selection buttons by mapping both arrays and rendering as btns.
  return (
    <main className="flex flex-col w-full h-full items-center justify-center mb-20 p-2">
      <div className="flex flex-col lg:flex-row mt-10 w-full md:w-3/4 items-center justify-center">
        <Carousel images={img} />
        <div className="text-gray-200 flex text-xl flex-col gap-4 p-[4px]">
          <h3 className="text-3xl font-bold tracking-tight">{name}</h3>
          <span className="text-2xl text-yellow-300">${price}</span>
          <p className="lg:max-w-[525px] w-full">{description}</p>
          <Selection
            name={name}
            img={img}
            price={price}
            color={color}
            size={size}
            kidSize={kidSize}
          />
        </div>
      </div>
    </main>
  );
}
