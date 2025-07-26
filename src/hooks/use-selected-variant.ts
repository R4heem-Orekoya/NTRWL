import { useQueryState } from "nuqs";
import { useMemo } from "react";
import { Product } from "@/shopify/types/storefront.types";

export function useSelectedVariant(variants: Product["variants"]["edges"]) {
   const [variantTitle] = useQueryState("size");

   const selectedVariant = useMemo(() => {
      return (
         variants.find(({ node }) => node.title === variantTitle)?.node ??
         variants[0].node
      );
   }, [variantTitle, variants]);

   return selectedVariant;
}
