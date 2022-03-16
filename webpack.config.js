const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: "Todo List",
    template: path.resolve(__dirname, "./public/index.html"), // template file
    filename: "index.html", // output file
  }),
  new Dotenv(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "./src/assets/img"),
        to: path.resolve(__dirname, "./dist/assets/img"),
      },
      {
        from: path.resolve(__dirname, "./public/manifest.json"),
        to: path.resolve(__dirname, "./dist/manifest.json"),
      },
      {
        from: path.resolve(__dirname, "./public/logo192.png"),
        to: path.resolve(__dirname, "./dist/logo192.png"),
      },
      {
        from: path.resolve(__dirname, "./public/logo512.png"),
        to: path.resolve(__dirname, "./dist/logo512.png"),
      },
    ],
  }),
];

let prodPlugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: "Todo List",
    template: path.resolve(__dirname, "./public/index.html"), // template file
    filename: "index.html", // output file
  }),
  new Dotenv(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "./src/assets/img"),
        to: path.resolve(__dirname, "./dist/assets/img"),
      },
    ],
  }),
];

module.exports = (tags, argv) => {
  return {
    mode: argv.mode,
    devtool: "inline-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, "./dist"),
      open: true,
      compress: true,
      hot: true,
      port: 3004,
    },
    entry: {
      main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(svg|png|jpg|jpeg|woff|woff2|ttf|eot|ico)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            limit: 10000,
          },
        },
      ],
    },
    resolve: {
      extensions: [".js"],
    },
    plugins: argv.mode === "development" ? devPlugins : prodPlugins,
  };
};
