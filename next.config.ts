import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ijs.gallerycdn.vsassets.io',
        port: '',
        pathname: '/extensions/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
