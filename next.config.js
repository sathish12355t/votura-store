/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',          // Enables static HTML export (Next.js 13+)
    reactStrictMode: true,     // Helps catch potential problems in React
    images: {
      unoptimized: true        // Required if using the <Image> component with next export
    }
  };
  
  module.exports = nextConfig;
  