const path = require('path');

console.log('HELLO', process.env.NODE_ENV);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, './public/build'),
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
      }
    ]
  }
};
