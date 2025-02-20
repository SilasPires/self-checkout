import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // permite uso as imagens do banco (copiar e colar hostname)
  images: {
    remotePatterns: [{hostname: "u9a6wmr3as.ufs.sh"}]
  }
};

export default nextConfig;
