"use client";

import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

export default function ClearBagButton() {
   const { clearCart } = useCart();

   return (
      <Button
         onClick={() => {
            clearCart();
            toast.success("Bag emptied successfully");
         }}
         asChild
         variant="outline"
      >
         <SheetClose>Empty Bag</SheetClose>
      </Button>
   );
}
