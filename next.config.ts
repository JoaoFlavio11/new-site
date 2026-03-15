import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com", // O domínio das capas dos seus livros
        port: "",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com", // O domínio dos avatares das empresas
        port: "",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;