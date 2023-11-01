import { categorySlugs } from "@/app/utils/categories";

export async function generateStaticParams() {
  return categorySlugs.map((cat) => {
    slug: cat;
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <p>{slug} SLUG STUFF</p>;
}
