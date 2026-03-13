import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Configuração para permitir imagens de domínios externos
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com", // O domínio das capas dos seus livros
        port: "",
        pathname: "/**", // Permite qualquer caminho dentro desse domínio
      },
    ],
  },
};

export default nextConfig;
