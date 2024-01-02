import { Product } from "@/app/Components/Dashboard/ProductUploads";
import CategoriesNav from "@/app/Components/UI/CategoriesNav";
import ProductCard from "@/app/Components/UI/ProductCard";
import { Suspense } from "react";
import { tshirtTags } from "@/app/data/data";

async function getProducts(cat: string) {
  const produs = await fetch(`${process.env.URL}/api/categories?cat=${cat}`, {
    cache: "no-store",
  });
  if (!produs.ok) {
    throw new Error("fetching data failed");
  }
  return produs.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fetchedProducts = await getProducts(slug);

  const products = fetchedProducts.prods;
  const productCards =
    products.length &&
    products.map((prod: Product, id: number) => {
      return (
        <Suspense fallback={<p>Cargando...</p>}>
          <ProductCard key={id} {...prod} />
        </Suspense>
      );
    });

  const tags = tshirtTags.map((tag, id) => {
    const encodedTag = encodeURIComponent(tag);
    console.log(encodedTag);
    return (
      <li className="rounded bg-white text-black p-[4px]" key={id}>
        <a href={`${process.env.URL}/tienda/camisetas/${encodedTag}`}>{tag}</a>
      </li>
    );
  });

  return (
    <main className="flex justify-center items-center mt-20 text-white">
      <div className="flex w-1/2">
        <CategoriesNav />
        <div className="flex flex-col items-center justify-center  w-full">
          <ul className="flex flex-wrap items-center justify-center gap-2 mb-2 max-w-md">
            {tags}
          </ul>
          <div className="flex flex-col items-center justify-center  w-full">
            <div className="flex max-w-[650px] items-center justify-center flex-wrap mb-40 gap-4">
              {products.length ? (
                productCards
              ) : (
                <p>No hay {slug} disponibles en este momento</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
