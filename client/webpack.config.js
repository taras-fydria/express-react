const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  target: 'web',
  entry: {
    index: resolve(__dirname, 'app', 'index.tsx')
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
    open: false,
    historyApiFallback:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public', 'index.html'),
      favicon: resolve(__dirname, 'public', 'favicon.png'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin()
  ],
}
