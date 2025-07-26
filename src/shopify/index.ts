import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const client = createStorefrontApiClient({
   storeDomain: process.env.SHOPIFY_STORE_DOMAIN as string,
   apiVersion: "2025-07",
   publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});