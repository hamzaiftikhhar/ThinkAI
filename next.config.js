/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this to resolve the favicon conflict
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig

