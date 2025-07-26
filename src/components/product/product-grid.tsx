import { Product } from "@/shopify/types/storefront.types";
import ProductCard from "./product-card";

interface ProductGridProps {
   data: Product[];
}

export default function ProductGrid({ data: products }: ProductGridProps) {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6">
         {products.map(product => (
           <ProductCard product={product} key={product.id} />
         ))}
      </div>
   );
}
