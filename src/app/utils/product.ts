import { type Product } from "../Components/ProductUploads";
export const uploadProduct = async (prod: Product) => {
  const response = await fetch("/api/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });

  if (response.status == 200) {
    return true;
  } else return false;
};
