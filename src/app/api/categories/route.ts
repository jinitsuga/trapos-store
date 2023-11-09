import product from "../../models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const params = req.nextUrl.searchParams;
  const query = params.get("cat");
  console.log(query);
  switch (query) {
    case "todos":
      try {
        const prods = await product.find({});
        return Response.json({ prods });
      } catch (err) {
        return Response.error();
      }
    case "camisetas":
      try {
        const prods = await product.find({ type: "camisetas" });
        console.log("CAMISETAAAAAS");
        return Response.json({ prods });
      } catch (err) {
        return Response.error();
      }
    case "gorras":
      try {
        const prods = await product.find({ type: "gorras" });
        return Response.json({ prods });
      } catch (err) {
        return Response.error();
      }
    case "tazas":
      try {
        const prods = await product.find({ type: "tazas" });
        return Response.json({ prods });
      } catch (err) {
        return Response.error();
      }
    case "canguros":
      try {
        const prods = await product.find({ type: "canguros" });
        return Response.json({ prods });
      } catch (err) {
        return Response.error();
      }
  }
}
