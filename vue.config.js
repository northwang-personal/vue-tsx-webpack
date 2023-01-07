const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          reactivityTransform: true,
        };
      });
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]-[local]-[hash:5]',
        },
      },
    },
  },
  devServer: {
    port: 8848,
  },
  productionSourceMap: false,
  transpileDependencies: [/node_modules/],
});
