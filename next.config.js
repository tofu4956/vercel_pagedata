// next.config.js

module.exports = {
    // Prefer loading of ES Modules over CommonJS
    experimental: { esmExternals: 'loose' },
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
    webpack(config, options) {
        config.module.rules.push({
          test: /\.mdx?$/,
          use: [
            // The default `babel-loader` used by Next:
            options.defaultLoaders.babel,
            {
              loader: '@mdx-js/loader',
              /** @type {import('@mdx-js/loader').Options} */
              options: {/* jsxImportSource: …, otherOptions… */}
            }
          ]
        })
    
        return config
      }
}