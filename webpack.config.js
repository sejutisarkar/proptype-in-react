const path = require('path')
const webpack = require('webpack')

module.exports = {
  // context means from where to start
  context: path.resolve(__dirname, './src'),
  // entry point of the file
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}
