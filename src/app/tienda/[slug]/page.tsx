import CategoriesNav from "@/app/Components/UI/CategoriesNav";
import ProductsDisplay from "@/app/Components/UI/ProductsDisplay";
import api from "@/app/utils/api";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fetchedProducts = await api.product.list(slug);

  const products = JSON.parse(JSON.stringify(fetchedProducts.prods as any));

  return (
    <main className="flex justify-center items-center mt-20 text-white">
      <div className="flex flex-col sm:flex-row w-full gap-2  sm:w-1/2">
        <CategoriesNav />
        <ProductsDisplay slug={slug} products={products} />
      </div>
    </main>
  );
}
