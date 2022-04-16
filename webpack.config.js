const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    styles: "./src/styles/index.scss",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    open: true,
    port: 3000,
  },
};
