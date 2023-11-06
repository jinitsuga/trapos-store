import { Product } from "@/app/Components/Dashboard/ProductUploads";
import CategoriesNav from "@/app/Components/UI/CategoriesNav";
import { categorySlugs } from "@/app/utils/categories";
import ProductCard from "@/app/Components/UI/ProductCard";

export async function generateStaticParams() {
  return categorySlugs.map((cat) => {
    slug: cat;
  });
}

async function getProducts(cat: string) {
  const produs = await fetch(`${process.env.URL}/api/categories?cat=${cat}`);
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
      return <ProductCard key={id} {...prod} />;
    });

  return (
    <main className="flex justify-center items-center mt-20 text-white">
      <div className="flex w-1/2">
        <CategoriesNav />
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
    </main>
  );
}
