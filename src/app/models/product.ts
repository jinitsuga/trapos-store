import mongoose from "mongoose";
import { Color } from "../Components/Dashboard/ProductUploads";

export interface ProductModel extends mongoose.Document {
  name: string;
  type: string;
  color: Array<any>;
  size: Array<string>;
  description?: string;
  price: number;
  img: Array<string>;
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
  color: {
    type: [{ type: Object }],
    required: true,
  },
  size: {
    type: [{ type: String }],
    required: false,
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
    type: [{ type: String }],
    required: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model<ProductModel>("Product", productSchema);
