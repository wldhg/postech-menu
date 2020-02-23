const SassWrapper = require('@zeit/next-sass');

module.exports = SassWrapper({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: true,
    localIdentName: '[sha512:hash:base62:9]',
  },
  sassLoaderOptions: {
    data: `
      @import "misc/variables.scss";
    `,
  },
});
