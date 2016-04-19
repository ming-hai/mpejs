var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        sandbox: './src/sandbox.js'
    },
    output: {
        path: path.join(__dirname, 'lib'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
              test: path.join(__dirname, 'src'),
              loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
      files: {
        js: [
          'lib/sandbox.js'
        ]
      },
      filename: 'sandbox.html',
      title: 'Web MIDI Sandbox',
      templateContent: 'Open the developer console to begin.'
    })]
};