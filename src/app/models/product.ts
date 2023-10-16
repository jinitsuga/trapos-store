import mongoose from "mongoose";

export interface ProductModel extends mongoose.Document {
  name: string;
  type: string;
  description?: string;
  price: number;
  img: string;
}
const productSchema = new mongoose.Schema<ProductModel>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model<ProductModel>("Product", productSchema);

export default Product;
