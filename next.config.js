/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'https://next13-starbucks-hompage-ajw9r3qzg-jangsebari.vercel.app/',
    ]
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'www.starbucks.co.kr',
    //     port: '',
    //     // pathname: '',
    //   },
    // ],
  },
}

module.exports = nextConfig
