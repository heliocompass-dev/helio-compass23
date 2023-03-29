/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'images.microcms-assets.io',
      'assets.st-note.com',
      'scontent.cdninstagram.com',
      'scontent-nrt1-1.cdninstagram.com',
      'scontent-nrt1-2.cdninstagram.com',
    ],
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        hostname: 'assets.st-note.com',
        pathname: '/production/uploads/images/*',
      },
      {
        hostname: 'scontent.cdninstagram.com',
        pathname: '/v/t51.29350-15/*',
      },
      {
        hostname: 'scontent-nrt1-1.cdninstagram.com',
        pathname: '/v/t51.29350-15/*',
      },
      {
        hostname: 'scontent-nrt1-2.cdninstagram.com',
        pathname: '/v/t51.29350-15/*',
      },
    ],
  },
   

}

module.exports = nextConfig


