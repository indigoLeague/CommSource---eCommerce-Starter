const path = require('path');
// const htmlWebpack = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, './public/build')
    // publicPath: path.resolve(__dirname, '/build')
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/public/build'),
    compress: true,
    port: 8080,
    watchContentBase: true,
    proxy: {
      '/': 'http://localhost:3000',
      '/item': 'http://localhost:3000',
      '/item/*': 'http://localhost:3000',
      '/profile': 'http://localhost:3000',
      '/item/loaditems': 'http://localhost:3000',
      '/item/buyitems': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // plugins: [
  //   new htmlWebpack({
  //     // use the index.html file as our template to create the html in bundle
  //     template: './src/index.html'
  //   })
  // ]
};
