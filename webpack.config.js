const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,//抄base文件的属性
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,//.css后缀文件
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};


