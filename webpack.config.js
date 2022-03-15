const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development",
  watchOptions: {
    ignored: /node_modules|\.docusaurus|build/,
    poll: 1000,
  },
  testNotARealOption: "yes"
};
