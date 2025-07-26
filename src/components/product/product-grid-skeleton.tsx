interface ProductGridSkeletonProps {
   show?: number;
}

export default function ProductGridSkeleton({ show = 8 }: ProductGridSkeletonProps) {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6">
         {Array.from({ length: show }).map((_, i) => (
            <div key={i} className="flex flex-col animate-pulse">
               <div className="aspect-[3/4] w-full rounded-xl bg-secondary" />
               <div className="mt-3 space-y-2">
                  <div className="h-2 bg-secondary rounded w-3/4" />
                  <div className="h-2 bg-secondary rounded w-1/2" />
               </div>
            </div>
         ))}
      </div>
   );
}
