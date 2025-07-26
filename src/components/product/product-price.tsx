"use client";

import { useSelectedVariant } from "@/hooks/use-selected-variant";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/shopify/types/storefront.types";

interface ProductPriceProps {
   variants: Product["variants"]["edges"];
}

export default function ProductPrice({ variants }: ProductPriceProps) {
   const selectedVariant = useSelectedVariant(variants);

   return (
      <p className="text-xl font-medium">
         {formatPrice({
            amount: selectedVariant.price.amount,
            currency: selectedVariant.price.currencyCode,
         })}
      </p>
   );
}
