import Product, { ProductModel } from "../../models/product";
import { Product as ProdType } from "@/app/Components/Dashboard/ProductUploads";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/app/utils/db";

export async function POST(req: NextRequest) {
  await connectDb();
  const body = await req.json();

  try {
    const prod = new Product(body);
    const savedProd = await prod.save();
  } catch (e) {
    console.log("upload error =>", e);
  }

  return NextResponse.json("producto agregado");
}

export async function PUT(req: NextRequest) {
  await connectDb();

  const body: ProdType = await req.json();
  const params = req.nextUrl.searchParams;
  const id = params.get("id");

  try {
    const product = await Product.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  } catch (err) {
    console.log(err);
  }

  return Response.json({ success: true, data: body });
}

export async function DELETE(req: NextRequest) {
  await connectDb();

  const params = req.nextUrl.searchParams;
  const id = params.get("id");

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  return Response.json({ success: true });
}

// Add and export another function for each request method (GET, PUT)

export async function GET(req: NextRequest) {
  await connectDb();

  const params = req.nextUrl.searchParams;
  const id = params.get("id");

  try {
    const product = await Product.findById(id);
    if (!product) {
      return Response.json({ success: false });
    }
    return Response.json({ success: true, data: product });
  } catch (err) {
    console.log(err);
  }
}
