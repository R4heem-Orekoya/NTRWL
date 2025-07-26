import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.shopify.com",
            port: "",
            pathname: "/s/files/1/0931/6148/8756/files/**", 
         },
      ],
   },
};

export default nextConfig;
