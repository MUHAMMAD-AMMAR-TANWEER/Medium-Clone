/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
      os: false,
    }
    return config
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
