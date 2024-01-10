import product from "../models/product";
import connectDb from "./db";

connectDb();

const api = {
  product: {
    list: async (cat: string) => {
      try {
        let prods;
        if (cat === "todos") {
          prods = await product.find({}).lean().exec();
        } else {
          prods = await product.find({ type: cat }).lean().exec();
        }
        return { prods };
      } catch (err) {
        throw new Error("Fetching data failed");
      }
    },
  },
};
export default api;
