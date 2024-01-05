import product from "../../models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const params = req.nextUrl.searchParams;

  const query = params.get("cat");

  const categoryCase = async (prodType: string) => {
    try {
      const prods = await product.find({ type: prodType });
      return Response.json({ prods });
    } catch (err) {
      return Response.error();
    }
  };

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
        let prods = [];
        if (params.get("tag")) {
          const tag = params.get("tag");
          prods = await product.find({ type: "camisetas", subType: tag });
        } else {
          prods = await product.find({ type: "camisetas" });
        }

        return Response.json({ prods });
      } catch (err) {
        return Response.error();
      }
    case "gorras":
      return categoryCase("gorras");
    case "tazas":
      return categoryCase("tazas");
    case "canguros":
      return categoryCase("canguros");
    case "musculosas":
      return categoryCase("musculosas");
    case "manga larga":
      return categoryCase("manga larga");
    case "buzos":
      return categoryCase("buzos");
    case "camperas":
      return categoryCase("camperas");
  }
}
