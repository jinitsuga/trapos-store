import Cart from "../Components/Cart/Cart";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h3 className="text-left w-1/2  text-3xl m-2  pb-8 my-8 tracking-tighter border-stone-300">
        Tu carrito
      </h3>
      <Cart />
    </main>
  );
}
