import { type Product } from "../Components/Dashboard/ProductUploads";
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

export const patchProduct = async (prod: Product, id: string) => {
  const response = await fetch(`/api/product?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod),
  });

  if (response.status == 200) {
    return true;
  } else return false;
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`/api/product?id=${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status == 200) {
    return true;
  } else {
    return false;
  }
};

export const getProduct = async (id: string) => {
  const response = await (
    await fetch(`${process.env.URL}/api/product?id=${id}`)
  ).json();

  return response.data;
};
