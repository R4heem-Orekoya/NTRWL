"use client";

import { Button } from "../ui/button";
import NumberFlow from "@number-flow/react";
import { Icon } from "@iconify/react";
import { CartItem, useCart } from "@/hooks/use-cart";

interface QuantityButtonsProps {
   item: CartItem;
}

export default function QuantityButtons({ item }: QuantityButtonsProps) {
   const { increaseItem, decreaseItem } = useCart();

   return (
      <div className="h-6 bg-secondary flex items-center gap-1 rounded-md">
         <Button
            size="icon"
            variant="ghost"
            className="size-6"
            onClick={() => decreaseItem(item.variant.id)}
         >
            <Icon icon="stash:minus" />
         </Button>

         <NumberFlow
            value={item.quantity}
            className="text-xs"
            transformTiming={{ duration: 300 }}
            spinTiming={{ duration: 300 }}
            opacityTiming={{ duration: 350, easing: "ease-out" }}
         />

         <Button
            size="icon"
            variant="ghost"
            className="size-6"
            onClick={() => increaseItem(item.variant.id)}
         >
            <Icon icon="stash:plus" />
         </Button>
      </div>
   );
}
