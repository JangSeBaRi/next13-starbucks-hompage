/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.starbucks.co.kr',
        port: '',
        // pathname: '',
      },
    ],
  },
}

module.exports = nextConfig
