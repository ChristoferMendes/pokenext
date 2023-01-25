/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.traction.one', 'unpkg.com']
  }
}

module.exports = nextConfig
