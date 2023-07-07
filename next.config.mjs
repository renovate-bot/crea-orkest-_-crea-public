/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverActions: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "Permissions-Policy",
          value: "fullscreen=(self)",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "origin-when-cross-origin",
        },
        {
          key: "Content-Security-Policy",
          value: `default-src 'self';script-src 'self' 'unsafe-inline' 'unsafe-eval';`,
        },
      ],
    },
  ],
};

export default nextConfig;
