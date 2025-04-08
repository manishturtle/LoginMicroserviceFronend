/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removing static export to allow server-side props
  // output: "export",
  trailingSlash: true, // Helps with IIS routing
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      // Handle tenant-specific routes
      {
        source: "/:tenant/tenant-admin/:path*",
        destination: "/[tenant]/tenant-admin/:path*",
      },
      // Handle tenant root
      {
        source: "/:tenant",
        destination: "/[tenant]",
      },
    ];
  },
  webpack: (config) => {
    // Add support for path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src')
    };
    
    return config;
  }
};

module.exports = nextConfig;
