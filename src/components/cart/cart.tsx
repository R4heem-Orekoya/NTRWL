"use client";

import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import Image from "next/image";
import QuantityButtons from "./quantity-buttons";
import RemoveFromCartButton from "./remove-from-cart-button";
import ClearBagButton from "./clear-bag-button";
import { ScrollArea } from "../ui/scroll-area";
import { formatPrice } from "@/lib/utils";

export default function Cart() {
   const { items } = useCart();

   console.log(items);

   const cartTotal = items.reduce(
      (total, item) =>
         total + Number(item.variant.price.amount) * item.quantity,
      0
   );

   return (
      <Sheet>
         <SheetTrigger asChild className="cursor-pointer">
            <div className="flex items-center gap-1">
               <Icon icon="solar:bag-3-outline" className="size-5" />
               <div className="size-3 grid place-items-center text-[8px] bg-destructive text-background rounded-full">
                  {items.length}
               </div>
            </div>
         </SheetTrigger>

         <SheetContent>
            <SheetHeader>
               <SheetTitle>CART</SheetTitle>
            </SheetHeader>

            <div className="flex-1 px-4">
               {items.length === 0 ? (
                  <div>
                     <h2 className="text-2xl font-semibold">
                        Don&apos;t miss out on the best deals!
                     </h2>
                     <p className="text-muted-foreground text-sm mt-2">
                        Your cart may be empty now, but let us help you fill it
                        up with amazing products.
                     </p>
                  </div>
               ) : (
                  <ScrollArea className="h-[calc(100vh-300px)] grid gap-4 pr-4">
                     {items.map(item => (
                        <div
                           key={item.variant.id}
                           className="flex items-start gap-4 pb-4"
                        >
                           <div className="relative w-14 aspect-[3/4] rounded overflow-hidden">
                              <Image
                                 src={item.product.images.edges[0].node.url}
                                 alt={item.product.title}
                                 fill
                                 className="object-cover"
                              />
                           </div>
                           <div className="flex-1 flex flex-col gap-2">
                              <div className="flex justify-between items-center">
                                 <div className="text-sm text-muted-foreground font-medium">
                                    <p>{item.product.title}</p>
                                    <p className="text-xs">
                                       <span>SIZE: </span>
                                       {item.variant.title}
                                    </p>
                                 </div>
                                 <p className="text-xs font-medium">
                                    {formatPrice({
                                       amount:
                                          item.variant.price.amount *
                                          item.quantity,
                                       currency:
                                          item.variant.price.currencyCode,
                                    })}
                                 </p>
                              </div>

                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-4">
                                    <QuantityButtons item={item} />
                                    <p className="text-xs font-medium">
                                       {formatPrice({
                                          amount: item.variant.price.amount,
                                          currency:
                                             item.variant.price.currencyCode,
                                       })}
                                    </p>
                                 </div>
                                 <RemoveFromCartButton
                                    variantId={item.variant.id}
                                 />
                              </div>
                           </div>
                        </div>
                     ))}
                  </ScrollArea>
               )}
            </div>

            <SheetFooter>
               {items.length === 0 ? (
                  <Button asChild>
                     <Link href="/products">
                        <SheetClose>Start Shopping</SheetClose>
                     </Link>
                  </Button>
               ) : (
                  <div className="grid gap-4">
                     <div className="grid gap-2">
                        <div className="flex justify-between items-center border-y py-2">
                           <span className="text-sm font-medium">
                              Subtotal:{" "}
                           </span>
                           <span className="text-xs font-medium">
                              {formatPrice({
                                 amount: cartTotal,
                                 currency: "NGN"
                              })}
                           </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                           Taxes and shipping calculated at checkout
                        </span>
                     </div>
                     <div className="flex flex-col gap-2 mt-2">
                        <Button type="submit">Go To Checkout</Button>
                        <ClearBagButton />
                     </div>
                  </div>
               )}
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
}
