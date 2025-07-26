import { formatPrice, slugify } from "@/lib/utils";
import { Product } from "@/shopify/types/storefront.types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
   product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
   return (
      <Link
         href={`/products/${slugify(product.title)}`}
         className="col-span-1 group"
      >
         <div className="relative aspect-[3/4] bg-secondary rounded overflow-hidden group-hover:opacity-80 transition-opacity">
            <Image
               src={product.images.edges[0].node.url}
               alt={product.title}
               fill
               className="size-full object-cover"
            />
         </div>
         <h3 className="mt-2 text-sm font-medium ">{product.title}</h3>
         <p className="flex items-center space-x-2 text-xs text-muted-foreground">
            {/* {product.variants.edges.length > 1 && <span>starting from {" "}</span>} */}
            <span>
               {formatPrice({
                  amount: product.variants.edges[0].node.price.amount,
                  currency: product.variants.edges[0].node.price.currencyCode
               })}
            </span>
         </p>
      </Link>
   );
}
