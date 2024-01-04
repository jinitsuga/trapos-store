import CategoryIcon from "./Components/UI/CategoryIcon";
import { icons } from "./data/data";
import connectDb from "./utils/db";

export default function Home() {
  const iconLinks = icons.map((icon, id) => (
    <CategoryIcon key={id} {...icon} />
  ));

  connectDb();
  return (
    <main className="flex flex-col mb-[100px] justify-center items-center">
      <section className="flex flex-col bg-[url('https://i.imgur.com/RJnozTI.png')] h-[400px] w-full items-center justify-center">
        {" "}
        <h1 className="text-[60px] font-bold text-white max-w-lg bg-gradient-to-r from-stone-900 rounded text-center p-2">
          Trapos Locos
        </h1>
        <h2 className="text-xl text-trapo-red">
          Los diseños que siempre quisiste.
        </h2>
        <a href="/tienda">
          <button className="box rounded bg-stone-900 text-white text-2xl hover:text-stone-600 p-4 mt-8 tracking-tight font-semibold">
            Explora nuestra tienda
          </button>
        </a>
      </section>
      <div className="flex items-center justify-center flex-wrap mt-[50px] mb-[100px] gap-4">
        {iconLinks}
      </div>
    </main>
  );
}
