import ProductGrid from "@/components/product/product-grid";
import { Product } from "@/shopify/types/storefront.types";
import { fetchProducts } from "@/shopify/utils";

export const revalidate = 3600

export default async function Page() {
   const products = (await fetchProducts({ take: 20 })) as Product[];

   return <ProductGrid data={products} />;
}
