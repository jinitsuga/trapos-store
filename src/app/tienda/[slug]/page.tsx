import CategoriesNav from "@/app/Components/UI/CategoriesNav";
import ProductsDisplay from "@/app/Components/UI/ProductsDisplay";
import product from "@/app/models/product";

async function getProducts(cat: string) {
  try {
    let prods;
    if (cat === "todos") {
      prods = await product.find({}).lean().exec();
    } else {
      prods = await product.find({ type: cat }).lean().exec();
    }
    return { prods };
  } catch (err) {
    throw new Error("Fetching data failed");
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fetchedProducts = await getProducts(slug);
  const products = fetchedProducts.prods as any;
  return (
    <main className="flex justify-center items-center mt-20 text-white">
      <div className="flex flex-col sm:flex-row w-full gap-2  sm:w-1/2">
        <CategoriesNav />
        <ProductsDisplay slug={slug} products={products} />
      </div>
    </main>
  );
}
