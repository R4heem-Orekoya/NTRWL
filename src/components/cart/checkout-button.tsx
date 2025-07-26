"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { createCheckoutAction } from "@/actions/create-checkout";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function CheckoutButton() {
   const { items } = useCart();
   const [isLoading, setIsLoading] = useState(false);

   async function checkout() {
      setIsLoading(true);
      try {
         if (items.length === 0) return;

         const res = await createCheckoutAction(items);

         if (res?.userErrors[0]) {
            toast.error(res?.userErrors[0].message);
            setIsLoading(false);
            return;
         }

         console.log(res);
         setIsLoading(false);
         window.location.href = res?.cart?.checkoutUrl;
      } catch (error) {
         toast.error("Checkout failed.");
         console.error(error);
         setIsLoading(false);
      }
   }

   return (
      <Button disabled={isLoading} type="button" onClick={() => checkout()}>
         Go To Checkout
         {isLoading && <Icon icon="svg-spinners:blocks-wave" />}
      </Button>
   );
}
