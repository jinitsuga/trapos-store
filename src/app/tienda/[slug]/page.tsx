import { Categories } from "@/app/Components/Dashboard/Catalogue";
import { categorySlugs } from "@/app/utils/categories";
import { searchCategory } from "@/app/utils/searchCategory";

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
  const products = await getProducts(slug);
  console.log(products.prods);

  return <p>{slug} SLUG STUFF</p>;
}
