const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          // inline base64 URLs for <=8k images, direct URLs for the rest
          loader: 'url-loader?limit=8192'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
};
