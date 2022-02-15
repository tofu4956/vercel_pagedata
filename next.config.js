// next.config.js

module.exports = {
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: 'loose' },
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js']
}