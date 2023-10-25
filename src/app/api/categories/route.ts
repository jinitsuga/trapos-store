import product from "../../models/product";
import Product, { ProductModel } from "../../models/product";
import { NextRequest, NextResponse } from "next/server";

// switch (method) {
//   case 'GET' /* Get a model by its ID */:
//     try {
//       const pet = await Pet.findById(id)
//       if (!pet) {
//         return res.status(400).json({ success: false })
//       }
//       res.status(200).json({ success: true, data: pet })
//     } catch (error) {
//       res.status(400).json({ success: false })
//     }

export async function GET(req: NextRequest, res: NextResponse) {
  const params = req.nextUrl.searchParams;
  const query = params.get("cat");
  const prods = await product.find({});
  console.log(prods);

  if (query) {
    return Response.json({ prods });
  }
}
