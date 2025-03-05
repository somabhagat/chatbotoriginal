/*
 * This babel configuration is used along with Jest for execute tests,
 * do not modify to avoid conflicts with webpack.config.js.
 */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
      '@babel/preset-flow', // Add this line 
      '@babel/preset-typescript', // Add this line
    [
      '@babel/preset-react',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    require('@babel/plugin-transform-modules-commonjs'),
    require('@babel/plugin-transform-runtime'),
  ],
}
