export default function ProductPageSkeleton() {
   return (
      <div className="relative flex flex-col max-w-4xl mx-auto px-4 md:px-0 animate-pulse">
         <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="relative md:sticky md:top-32 col-span-1 aspect-[3/4] rounded bg-secondary" />

            <div className="md:py-8 flex flex-col gap-6">
               <div className="h-6 bg-secondary rounded w-3/4" />

               <div className="h-5 bg-secondary rounded w-1/4" />

               <div className="flex flex-col gap-2">
                  <div className="h-4 bg-secondary w-24 rounded" />
                  <div className="flex flex-wrap gap-2">
                     {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-8 w-20 bg-secondary rounded" />
                     ))}
                  </div>
               </div>

               <div className="h-10 bg-secondary rounded w-full" />

               <div className="h-4 bg-secondary w-32 rounded" />

               <div className="h-px bg-secondary my-2" />

               <ul className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                     <li key={i} className="h-4 bg-secondary rounded w-2/3" />
                  ))}
               </ul>

               <div className="mt-4 space-y-2">
                  <div className="h-4 bg-secondary w-40 rounded" />
                  <ul className="list-disc pl-5 space-y-1">
                     {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i} className="h-3 bg-secondary rounded w-3/4" />
                     ))}
                  </ul>
               </div>
            </div>
         </div>

         <div className="mt-10 max-w-[65ch] space-y-4">
            <div className="h-5 bg-secondary rounded w-48" />
            {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="h-3 bg-secondary rounded w-full" />
            ))}
         </div>
      </div>
   );
}
