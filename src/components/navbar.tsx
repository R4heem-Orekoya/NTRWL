import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import Cart from "./cart/cart";
import Link from "next/link";

export default function Navbar() {
   return (
      <header className="w-full bg-background sticky top-0 z-20">
         <nav className="flex justify-between items-center w-[min(1200px,90%)] mx-auto h-16">
            <Button size="icon" variant="ghost">
               <Icon icon="solar:magnifer-outline" className="size-4" />
            </Button>

            <Link href="/" className="font-againts text-3xl">
               NTRWL
            </Link>

            <Cart />
         </nav>
      </header>
   );
}
