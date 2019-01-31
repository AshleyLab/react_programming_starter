const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let isProduction = process.env.NODE_ENV === "production";

// Development asset host, asset location and build output path.
const publicHost = isProduction ? "" : "http://localhost:2992";
const rootAssetPath = "./assets";
const buildOutputPath = "./src/build";

const config = {
  mode: isProduction ? "production" : "development",
  context: path.join(__dirname, "src"),
  entry: ["./index.js"],
  output: {
    path: path.resolve(__dirname, "build/prod/assets"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "src/public",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              context: path.resolve(__dirname, "context"),
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        use: "url-loader?limit=100000"
      }
    ]
  }
};

if (isProduction) {
  config.devtool = "source-map";
  config.devServer = {};
  config.plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new MiniCssExtractPlugin("[name].[chunkhash].css")
  ];
}

module.exports = config;
