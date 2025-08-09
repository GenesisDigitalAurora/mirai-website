import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Solo configurar para export en producción
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'out',
  }),
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  // Deshabilitar el indicador de desarrollo
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right'
  }
};

export default nextConfig;
