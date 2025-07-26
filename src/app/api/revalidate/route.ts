import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   const productWebhooks = [
      "products/create",
      "products/delete",
      "products/update",
   ];
   const topic = (await headers()).get("x-shopify-topic") || "unknown";
   const secret = req.nextUrl.searchParams.get("secret");
   const isProductUpdate = productWebhooks.includes(topic);

   if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
      console.error("Invalid revalidation secret.");
      return NextResponse.json({ status: 401 });
   }

   if (!isProductUpdate) {
      return NextResponse.json({ status: 200 });
   }

   if (isProductUpdate) {
      revalidateTag("products");
   }

   return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
   });
}
