const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: './assets/src/index.js'
  },
  output: {
    path: __dirname + '/.tmp/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /(\.css$)/
      },{
        test: /(\.(ttf)|woff(2)?$)/,
        use:['file-loader']

      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/src/index.html'
    })
  ]
};