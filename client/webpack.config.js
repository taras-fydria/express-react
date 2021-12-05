const {resolve, join} = require('path')

module.exports = {
  target: 'node',
  entry: {
    index: resolve(__dirname, 'app', 'index.tsx')
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    client: {
      logging: 'info',
      reconnect: true,
    },
    static: {
      directory: join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
    magicHtml: true,
    devMiddleware: {
      writeToDisk: false,
    }
  },
}

console.log(__dirname)