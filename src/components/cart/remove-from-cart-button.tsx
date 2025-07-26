import { useCart } from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { toast } from "sonner";

interface RemoveFromCartButtonProps {
   variantId: string;
}

export default function RemoveFromCartButton({ variantId }: RemoveFromCartButtonProps) {
   const { removeItem } = useCart()
   
   return (
      <Button 
         size="icon" 
         variant="ghost"
         className="size-8 hover:bg-destructive/10 hover:text-destructive text-destructive"
         onClick={() => {
            removeItem(variantId)
            toast.success("Item removed from bag!")
         }}
      >
         <Icon icon="solar:trash-bin-trash-outline" />
      </Button>
   );
}
