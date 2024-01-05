import CategoriesNav from "@/app/Components/UI/CategoriesNav";
import ProductsDisplay from "@/app/Components/UI/ProductsDisplay";

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

  return (
    <main className="flex justify-center items-center mt-20 text-white">
      <div className="flex flex-col sm:flex-row w-1/2">
        <CategoriesNav />
        <ProductsDisplay slug={slug} products={products} />
      </div>
    </main>
  );
}
