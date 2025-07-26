"use client";

import { useQueryState } from "nuqs";
import { Product } from "@/shopify/types/storefront.types";
import { Button } from "../ui/button";
import { useSelectedVariant } from "@/hooks/use-selected-variant";

interface VariantSelectorProps {
   variants: Product["variants"]["edges"];
}

export default function VariantSelector({ variants }: VariantSelectorProps) {
   const [_, setVariantTitle] = useQueryState("size");

   const selectedVariant = useSelectedVariant(variants);

   return (
      <div className="flex flex-wrap gap-2">
         {variants.map(({ node }) => (
            <Button
               key={node.id}
               variant={selectedVariant.id === node.id ? "default" : "outline"}
               onClick={() => setVariantTitle(node.title)}
               className="text-sm"
            >
               {node.title}
            </Button>
         ))}
      </div>
   );
}
