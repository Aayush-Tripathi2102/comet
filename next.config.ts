import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'www.wearcomet.com',
      pathname: '/cdn/shop/files/**'
    }]
  }
  /* config options here */
};
export default nextConfig;