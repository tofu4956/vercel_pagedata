// next.config.js

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: 'loose' },
    images: { 
      domains: ['www.google.com'],
    }
})