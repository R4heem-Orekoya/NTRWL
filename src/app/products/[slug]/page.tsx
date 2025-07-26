import Image from "next/image";
import { Icon } from "@iconify/react";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/cart/add-to-cart-button";
import { getProduct } from "@/shopify/utils";
import VariantSelector from "@/components/product/variant-selector";
import { Product, ProductVariantEdge } from "@/shopify/types/storefront.types";
import parse from "html-react-parser";
import ProductPrice from "@/components/product/product-price";
import { customRender } from "@/lib/html-renderer";

interface Props {
   params: Promise<{
      slug: string;
   }>;
}

export default async function Page({ params }: Props) {
   const slug = (await params).slug;
   const product = await getProduct({ slug }) as Product;

   if (!product) {
      notFound();
   }

   return (
      <div className="relative flex flex-col max-w-4xl mx-auto px-4 md:px-0">
         <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="relative md:sticky md:top-32 col-span-1 aspect-[3/4] rounded overflow-hidden">
               <Image
                  src={product.images.edges[0].node.url}
                  alt={product.title}
                  fill
                  className="size-full object-cover"
               />
            </div>

            <div className="md:py-8 flex flex-col gap-6">
               <h1 className="text-xl md:text-2xl font-semibold text-zinc-900">
                  {product.title}
               </h1>

               <ProductPrice
                  variants={product.variants.edges as ProductVariantEdge[]}
               />

               {product.variants.edges.length > 1 && (
                  <div className="flex flex-col gap-2">
                     <span className="text-sm font-medium text-zinc-500">Select Size</span>
                     <VariantSelector
                        variants={product.variants.edges as ProductVariantEdge[]}
                     />
                  </div>
               )}

               <AddToCartButton  
                  product={product} 
                  variants={product.variants.edges as ProductVariantEdge[]}
               />

               <p className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                  <Icon icon="solar:box-outline" className="size-4" />
                  Free Shipping
               </p>

               <hr className="border-zinc-200 my-4" />

               <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-center gap-2">
                     <Icon icon="solar:shield-check-outline" className="size-4" />
                     30-Day Money Back Guarantee
                  </li>
                  <li className="flex items-center gap-2">
                     <Icon icon="solar:box-outline" className="size-4" />
                     Fast & Secure Shipping
                  </li>
                  <li className="flex items-center gap-2">
                     <Icon icon="solar:star-line-duotone" className="size-4 text-yellow-400" />
                     Trusted by 2,000+ customers
                  </li>
               </ul>

               <div className="mt-4">
                  <h3 className="text-sm font-semibold text-zinc-800 mb-1">Why you’ll love it</h3>
                  <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
                     <li>Premium cotton fabric</li>
                     <li>Bold Adventure print</li>
                     <li>Comfortable fit for everyday wear</li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="mt-10 text-xl font-semibold max-w-[65ch]">
            <h2>Product Description</h2>
            <div className="mt-6 text-muted-foreground text-sm leading-relaxed">
               {parse(product.descriptionHtml, customRender)}
            </div>
         </div>
      </div>
   );
}
