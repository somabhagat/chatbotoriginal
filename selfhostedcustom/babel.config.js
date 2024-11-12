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
    [
      '@babel/preset-react', // preset- wort hinzufügen 
      {
        targets: {
          node: 'current',
        },
      },
    ],
      '@babel/preset-flow', // Diese Zeile hinzufügen 

      '@babel/preset-typescript', // Diese Zeile hinzufügen 
  ],
  plugins: [
    require('@babel/plugin-transform-modules-commonjs'),
    require('@babel/plugin-transform-runtime'),
  ],
}
