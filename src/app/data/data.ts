import { Color } from "../Components/Dashboard/ProductUploads";

export const categories = ["camisetas", "canguros", "gorras", "tazas", "todos"];

export const sizes: string[] = ["XXL", "XL", "L", "M", "S"];

export const colors: Color[] = [
  { name: "azul", hex: "#1d4ed8" },
  { name: "negro", hex: "#171717" },
  { name: "gris", hex: "#6b7280" },
  { name: "blanco", hex: "#fafafa" },
  { name: "verde", hex: "#166534" },
];

export const icons = [
  {
    img: "/t-shirt.png",
    href: "/tienda/camisetas",
    category: "Camisetas",
  },
  {
    img: "/cap.png",
    href: "/tienda/gorras",
    category: "Gorras",
  },
  {
    img: "/hoodie.png",
    href: "/tienda/canguros",
    category: "Canguros",
  },
  {
    img: "/coffee-cup.png",
    href: "/tienda/tazas",
    category: "Tazas",
  },
];
