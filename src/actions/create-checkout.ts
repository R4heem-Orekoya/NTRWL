"use server"

import { CartItem } from "@/hooks/use-cart";
import { createCheckout } from "@/shopify/utils";

export async function createCheckoutAction(items: CartItem[]) {
   const checkoutUrl = await createCheckout(items);
   
   return checkoutUrl
}