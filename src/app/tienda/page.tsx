import Link from "next/link";
import Category from "../Components/UI/Category";
import { categoryList } from "../utils/categories";

export default async function Page() {
  const categoryBtns = categoryList.map((cat, id) => {
    return <Category key={id} cat={cat} />;
  });

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="mt-10 flex gap-4">{categoryBtns}</div>
    </main>
  );
}
