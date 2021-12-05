const {resolve} = require('path')

module.exports = {
  target: 'node',
  entry:{
    index: resolve(__dirname, 'app', 'index.tsx')
  },
  output:{
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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

console.log(__dirname)