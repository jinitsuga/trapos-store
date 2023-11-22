export const searchCategory = async (category: string) => {
  const resp = await fetch(`/api/categories?cat=${category}`);

  return resp.json();
};
