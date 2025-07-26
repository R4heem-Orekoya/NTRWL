import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function slugify(input: string): string {
   if (!input) return "";

   return input
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");
}

export function formatPrice({
   amount,
   currency,
}: {
   amount: number;
   currency: string;
}): string {
   return new Intl.NumberFormat("en", {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
   }).format(amount);
}

export function sleep(ms: number): Promise<void> {
   return new Promise(resolve => setTimeout(resolve, ms));
}
