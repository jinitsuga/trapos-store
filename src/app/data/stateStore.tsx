import { create } from "zustand";
import { SelectedProduct } from "../Components/DetailsSelection";

type CartProduct = SelectedProduct & {
  quantity: number;
};

type State = {
  products: CartProduct[];
};

type Action = {
  addProduct: (products: State["products"]) => void;
};

export const useCartStore = create<State & Action>((set) => ({
  products: [],
  addProduct: (products) => set(() => ({ products: products })),
}));
