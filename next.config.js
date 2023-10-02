import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    // typedRoutes: true,
    // serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
  webpack: (config) => {
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
        })
      )
    }
    return config
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/graphql',
          destination:
            'https://main--crea-orkest-p7nmyh.apollographos.net/graphql',
        },
      ],
    }
  },

  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'Permissions-Policy',
          value: 'fullscreen=(self)',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Content-Security-Policy',
          value: `default-src 'unsafe-inline' 'self' https://main--crea-orkest-p7nmyh.apollographos.net; script-src 'self' 'unsafe-inline' 'unsafe-eval'; manifest-src https://creaorkest.nl/manifest.json;`,
        },
      ],
    },
  ],
}

export default nextConfig
