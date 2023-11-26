export const capitalize = (word: string | undefined) => {
  return `${word![0].toUpperCase()}${word?.slice(1)}`;
};
