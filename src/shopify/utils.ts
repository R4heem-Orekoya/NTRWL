import { client } from ".";
import { productQuery } from "./queries/product";
import { productsQuery } from "./queries/products";

export async function fetchProducts({ take }: { take: number }) {
   const res = await client.request(productsQuery, {
      variables: {
         first: take
      },
   });

   return res.data?.products.edges.map(edge => edge.node);
}

export async function getProduct({ slug } : { slug: string }) {
   const res = await client.request(productQuery, {
      variables: {
         handle: slug
      }
   })
   
   return res.data?.product
}