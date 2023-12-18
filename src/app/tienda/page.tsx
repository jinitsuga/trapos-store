import CategoriesNav from "../Components/UI/CategoriesNav";
import connectDb from "../utils/db";

connectDb();

export default async function Page() {
  return (
    <main className="flex justify-center items-center mt-20 text-white">
      <div className="flex w-1/2">
        <CategoriesNav />
        <div className="flex flex-col items-center justify-center  w-full">
          <p className="text-xl">Los mas vendidos:</p>
        </div>
      </div>
    </main>
  );
}
