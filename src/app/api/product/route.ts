import connectDb from "@/app/utils/db";
import Product, { ProductModel } from "../../models/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { method } = req;
  console.log(method);

  const body = await req.json();
  console.log(body);

  try {
    const prod: ProductModel = new Product({
      name: "Soda tshirt",
      description: "Camiseta de algodon de Soda Stereo",
      price: 400,
      type: "camiseta",
      img: "https://utfs.io/f/2c8bdf3d-d573-44f5-a41a-32c96e04e89d-1ae6gz.jpg",
    });
    const savedProd = await prod.save();
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json("producto agregado");
}
