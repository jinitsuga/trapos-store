import CategoriesNav from "../Components/UI/CategoriesNav";

export default async function Page() {
  return (
    <main className="flex justify-center items-center mt-20 text-white">
      <div className="flex w-3/4 border-2 border-red-400">
        <CategoriesNav />
        <div className="flex flex-col items-center justify-center border-2 border-white w-full">
          <p className="text-xl">Los mas vendidos:</p>
        </div>
      </div>
    </main>
  );
}
