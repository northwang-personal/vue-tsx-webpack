module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        polyfills: ['es6.promise', 'es6.symbol'],
      },
    ],
  ],
};
