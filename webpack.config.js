const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    // !DEFAULT PORT IS 8080
    // port: 3000,
    publicPath: 'http://localhost:3000/dist/'
  },
  disableHostCheck: true
};
