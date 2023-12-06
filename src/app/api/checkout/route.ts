import mercadopago from "mercadopago";
import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
  access_token: process.env.NEXT_MPTOKEN!,
});

export async function POST(req: NextRequest, res: NextApiResponse) {
  const body = await req.json();
  const products = body;
  const URL = "http://localhost:3000/";

  try {
    const preference: CreatePreferencePayload = {
      items: [],
      auto_return: "approved",
      back_urls: {
        success: `${URL}`,
        failure: `${URL}`,
      },
      notification_url: `${URL}/api/notify`,
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).send({ url: response.body.init_point });
  } catch {}
}
