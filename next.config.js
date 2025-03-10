/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true, // Required for 'output: export'
    },
  };
  
  module.exports = nextConfig;
  