import { CartItem } from "@/hooks/use-cart";
import { client } from ".";
import { productQuery } from "./queries/product";
import { productsQuery } from "./queries/products";
import { checkout } from "./queries/checkout";

export async function fetchProducts({ take }: { take: number }) {
   const res = await client.request(productsQuery, {
      variables: {
         first: take,
      },
   });

   return res.data?.products.edges.map(edge => edge.node);
}

export async function getProduct({ slug }: { slug: string }) {
   const res = await client.request(productQuery, {
      variables: {
         handle: slug,
      },
   });

   return res.data?.product;
}

export async function createCheckout(items: CartItem[]) {
   const lines = items.map(item => ({
      merchandiseId: item.variant.id,
      quantity: item.quantity,
   }));

   const res = await client.request(checkout, {
      variables: {
         input: { lines },
      },
   });

   if (res.errors) {
      throw new Error("Something went wrong!");
   }
   
   return res.data?.cartCreate
}
