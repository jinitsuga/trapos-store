import mercadopago, {
  MercadoPagoConfig,
  Payment,
  Preference,
} from "mercadopago";
import { NextRequest, NextResponse } from "next/server";
import { CartProduct } from "@/app/data/stateStore";

type ItemsArr = {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
  currency_id?: string;
};

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_MPTOKEN!,
});
export async function POST(req: NextRequest) {
  const body = await req.json();
  const products = body;
  const URL = "http://localhost:3000/";

  const preference: Preference = new Preference(client);

  const productList: ItemsArr[] = products.map(
    (product: CartProduct, id: number) => {
      return {
        id: id,
        title: product.name,
        unit_price: product.price,
        quantity: product.quantity,
        currency_id: "UYU",
      };
    }
  );
  let url: string = "";

  try {
    const pref = await preference.create({
      body: {
        items: productList,
        auto_return: "approved",
        back_urls: { success: `${URL}/tienda`, failure: `${URL}/cart` },
      },
    });

    url = pref.sandbox_init_point!;

    return Response.json({ success: true, data: url });
  } catch (error) {
    console.log(error);
  }

  return Response.json({}, { status: 500 });
}
