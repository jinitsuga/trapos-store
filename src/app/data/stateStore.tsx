import { create } from "zustand";
import { SelectedProduct } from "../Components/DetailsSelection";

export type CartProduct = SelectedProduct & {
  quantity: number;
};

type State = {
  products: CartProduct[];
};

type Action = {
  addProduct: (products: State["products"]) => void;
  increaseQty: (products: State["products"], id: number) => void;
};

export const useCartStore = create<State & Action>((set) => ({
  products: [],
  addProduct: (products) =>
    set(() => {
      localStorage.setItem("cart", JSON.stringify(products));
      return { products: products };
    }),
  increaseQty: (products, id) =>
    set(() => {
      const newProducts = {
        products: [
          ...products,
          { ...products[id], quantity: products[id].quantity + 1 },
        ],
      };
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    }),
}));
