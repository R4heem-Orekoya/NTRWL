import { Product, ProductVariantEdge } from "@/shopify/types/storefront.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
   product: Product;
   variant: ProductVariantEdge["node"];
   quantity: number;
};

type CartState = {
   items: CartItem[];
   addItem: (product: Product, variant: ProductVariantEdge["node"]) => void;
   removeItem: (variantId: string) => void;
   increaseItem: (variantId: string) => void;
   decreaseItem: (variantId: string) => void;
   clearCart: () => void;
};

export const useCart = create<CartState>()(
   persist(
      set => ({
         items: [],
         addItem: (product, variant) =>
            set(state => {
               const existingItem = state.items.find(
                  item => item.variant.id === variant.id
               );

               if (existingItem) {
                  return {
                     items: state.items.map(item =>
                        item.variant.id === variant.id
                           ? { ...item, quantity: item.quantity + 1 }
                           : item
                     ),
                  };
               }

               return {
                  items: [...state.items, { product, variant, quantity: 1 }],
               };
            }),
         removeItem: variantId =>
            set(state => ({
               items: state.items.filter(item => item.variant.id !== variantId),
            })),
         increaseItem: variantId =>
            set(state => ({
               items: state.items.map(item =>
                  item.variant.id === variantId
                     ? { ...item, quantity: item.quantity + 1 }
                     : item
               ),
            })),
         decreaseItem: variantId =>
            set(state => ({
               items: state.items
                  .map(item =>
                     item.variant.id === variantId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                  )
                  .filter(item => item.quantity > 0),
            })),
         clearCart: () => set({ items: [] }),
      }),
      {
         name: "cart-storage",
         storage: createJSONStorage(() => localStorage),
      }
   )
);
