/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com',],
      dangerouslyAllowSVG: true,
    },
    // future: {
    //   webpack5: true
    // },
  }
  
module.exports = nextConfig
