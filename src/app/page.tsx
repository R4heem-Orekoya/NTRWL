import ProductGrid from "@/components/product/product-grid";
import { Button } from "@/components/ui/button";
import { Product } from "@/shopify/types/storefront.types";
import { fetchProducts } from "@/shopify/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default async function Page() {
   const products = (await fetchProducts({ take: 4 })) as Product[];

   return (
      <>
         <div className="flex flex-col items-center justify-center space-y-4 w-full text-center rounded-lg">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
               Summer styles are finally here
            </h1>
            <p className="max-w-md mx-auto text-sm">
               This year, our new summer collection will shelter you from the
               harsh elements of a world that doesn&apos;t care if you live or die.
            </p>
            <Button asChild>
               <Link href="/products">Shop Collection</Link>
            </Button>
         </div>

         <section id="collection" className="my-16">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl font-medium">Collection</h2>
               <Button asChild variant="link" className="px-0">
                  <Link href="/products">
                     See All
                     <Icon icon="solar:round-arrow-right-outline" />
                  </Link>
               </Button>
            </div>

            <ProductGrid data={products} />
         </section>
      </>
   );
}
