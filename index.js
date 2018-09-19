module.exports = (nextConfig = {}) => {
  if (!nextConfig.pageExtensions) {
    nextConfig.pageExtensions = ['jsx', 'js']
  }

  if (nextConfig.pageExtensions.indexOf('ts') === -1) {
    nextConfig.pageExtensions.unshift('ts')
  }

  if (nextConfig.pageExtensions.indexOf('tsx') === -1) {
    nextConfig.pageExtensions.unshift('tsx')
  }

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const {dir, defaultLoaders} = options;

      config.resolve.extensions.push('.ts', '.tsx');

      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          defaultLoaders.babel,
          {
            loader: 'ts-loader',
            options: Object.assign(
              {},
              {
                transpileOnly: true
              },
              nextConfig.typescriptLoaderOptions
            )
          }
        ]
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
};
