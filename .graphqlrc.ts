import { ApiType, shopifyApiProject } from "@shopify/api-codegen-preset";

export default {
   schema: "https://ntrwl.myshopify.com/storefront-graphql-direct-proxy",
   documents: ["*.ts", "!node_modules"],
   projects: {
      default: shopifyApiProject({
         apiType: ApiType.Storefront,
         apiVersion: "2025-07",
         outputDir: "./src/shopify/types",
      }),
   },
};
