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
        return {
          prods: prods.map(
            ({
              name,
              color,
              type,
              subType,
              kidSize,
              size,
              price,
              description,
              img,
            }) => ({
              name,
              color,
              type,
              subType,
              kidSize,
              size,
              price,
              description,
              img,
            })
          ),
        };
      } catch (err) {
        console.log(err);
        throw new Error("Fetching data failed");
      }
    },
  },
};
export default api;
