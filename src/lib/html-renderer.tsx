import { domToReact } from "html-react-parser";

export const customRender = {
   replace: (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      domNode: any
   ) => {
      if (!domNode.name) return;

      const children = domToReact(domNode.children);

      switch (domNode.name) {
         case "p":
            return (
               <p className="text-base font-normal leading-relaxed text-zinc-600 mb-3">
                  {children}
               </p>
            );

         case "h1":
            return (
               <h1 className="text-2xl font-semibold text-zinc-900 mb-4">
                  {children}
               </h1>
            );

         case "h2":
            return (
               <h2 className="text-xl font-semibold text-zinc-800 mb-3">
                  {children}
               </h2>
            );

         case "h3":
            return (
               <h3 className="text-lg font-medium text-zinc-800 mb-2">
                  {children}
               </h3>
            );

         case "h4":
            return (
               <h4 className="text-base font-semibold text-zinc-700 mb-2">
                  {children}
               </h4>
            );

         case "h5":
            return (
               <h5 className="text-sm font-semibold text-zinc-700 mb-1">
                  {children}
               </h5>
            );

         case "h6":
            return (
               <h6 className="text-xs font-medium text-zinc-600 mb-1 uppercase tracking-wide">
                  {children}
               </h6>
            );

         case "ul":
            return (
               <ul className="list-disc ml-6 text-base font-normal text-zinc-600 space-y-1 mb-3">
                  {children}
               </ul>
            );

         case "ol":
            return (
               <ol className="list-decimal ml-5 text-base font-normal text-zinc-600 space-y-1 mb-3">
                  {children}
               </ol>
            );

         case "li":
            return <li>{children}</li>;

         case "a":
            return (
               <a
                  href={domNode.attribs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
               >
                  {children}
               </a>
            );

         case "strong":
            return (
               <strong className="font-semibold text-zinc-800">
                  {children}
               </strong>
            );

         case "em":
            return <em className="italic text-zinc-600">{children}</em>;

         case "blockquote":
            return (
               <blockquote className="border-l-4 border-zinc-300 pl-4 italic text-zinc-500 mb-3">
                  {children}
               </blockquote>
            );

         case "img":
            return (
               <img
                  src={domNode.attribs.src}
                  alt={domNode.attribs.alt || ""}
                  className="rounded max-w-full h-auto my-4"
               />
            );

         default:
            return;
      }
   },
};
