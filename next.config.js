/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fmenew.sgp1.cdn.digitaloceanspaces.com', 'programs.expertrons.com', 'server.supermarks.in'],
  },
}

module.exports = nextConfig
