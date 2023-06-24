/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.ibb.co','tuk-cdn.s3.amazonaws.com','w7.pngwing.com'],
  },

};

module.exports = nextConfig;
