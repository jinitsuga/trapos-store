import { Categories } from "../Components/Dashboard/Catalogue";

export const searchCategory = async (category: Categories) => {
  const resp = await (await fetch(`/api/categories?cat=${category}`)).json();
  console.log(resp.prods);
  return resp;
};
