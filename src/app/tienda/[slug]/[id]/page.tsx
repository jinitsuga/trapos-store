import { getProduct } from "@/app/utils/product";
import Carousel from "@/app/Components/Carousel";
import { Product } from "@/app/Components/Dashboard/ProductUploads";
import Selection from "@/app/Components/DetailsSelection";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const productData: Product = await getProduct(id);

  console.log(productData);
  const { name, img, description, price, color, size }: Product = productData;
  // Add color and size selection buttons by mapping both arrays and rendering as btns.
  return (
    <main className="flex flex-col w-full h-full items-center justify-center mb-20 p-2">
      <div className="flex flex-col sm:flex-row mt-10 w-full sm:w-1/2 items-center justify-center">
        <Carousel images={img} />
        <div className="text-gray-200 flex text-xl flex-col gap-4">
          <h3 className="text-3xl font-bold tracking-tight">{name}</h3>
          <span className="text-2xl text-yellow-300">${price}</span>
          <p>{description}</p>
          <Selection
            name={name}
            img={img}
            price={price}
            color={color}
            size={size}
          />
        </div>
      </div>
    </main>
  );
}
