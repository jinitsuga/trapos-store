import { create } from "zustand";
import { SelectedProduct } from "../Components/DetailsSelection";

type CartProduct = SelectedProduct & {
  quantity: number;
};

type State = {
  products?: CartProduct[] | undefined;
};

type Action = {
  addProduct: (products: State["products"]) => void;
};

const useCartStore = create<State & Action>((set) => ({
  products: undefined,
  addProduct: (products) => set(() => ({ products: products })),
}));
