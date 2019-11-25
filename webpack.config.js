const path = require('path');
const htmlWebpack = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, './public/build')
    // publicPath: path.resolve(__dirname, '/build')
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpack({
      //use the index.html file as our template to create the html in bundle
      template: './src/index.html'
    })
  ]
};
