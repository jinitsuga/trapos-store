import { Categories } from "@/app/Components/Dashboard/Catalogue";
import product from "@/app/models/product";
import { Product } from "@/app/Components/Dashboard/ProductUploads";
import { categorySlugs } from "@/app/utils/categories";
import { searchCategory } from "@/app/utils/searchCategory";
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
    <main className="flex flex-col mt-10 justify-center items-center">
      {products.length ? (
        <div className="flex max-w-[650px] items-center justify-center flex-wrap mb-40 gap-4">
          {productCards}
        </div>
      ) : (
        <div>No hay {slug} disponibles en este momento.</div>
      )}
    </main>
  );
}
