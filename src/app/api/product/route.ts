import Product, { ProductModel } from "../../models/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { method } = req;
  console.log(method);

  const body = await req.json();
  console.log(body);

  try {
    const { name, price, type, description, img } = body;
    const prod: ProductModel = new Product({
      name: name,
      price: price,
      type: type,
      description: description,
      img: img,
    });
    const savedProd = await prod.save();
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json("producto agregado");
}
