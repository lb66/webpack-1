const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'HTML标题',
    filename: 'index.html',
    template: 'src/index.html'
  }),
  ],
  module: {
    rules: [{
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    },
    {
      test: /\.styl$/,
      loader: ["style-loader", "css-loader", "stylus-loader"]
    },
    {
      test: /\.less$/,
      loader: ["style-loader", "css-loader", "less-loader"]
    },
    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
        loader: "sass-loader", // 将 Sass 编译成 CSS
        options: { implementation: require("dart-sass") }
      }]
    }]
  }
};


