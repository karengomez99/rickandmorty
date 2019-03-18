const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    watchContentBase: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", 
        "css-loader", 
        "sass-loader"
      ]
    }]
  }
};