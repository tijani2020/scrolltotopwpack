const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
  {
    test: /\.html$/,
    use: ["html-loader"]
      },
  {
    test: /\.(svg|png|jpg|gif)$/,
    use: {
    loader: "file-loader",
    options: {
          name: "[name].[hash].[ext]",
          outputPath: "imgs"
               }
            }
      }
    ]
  }
};