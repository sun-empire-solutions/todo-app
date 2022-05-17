const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: {
    main: "./src/index.tsx",
    styles: "./src/styles/index.scss",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    runtimeChunk: {
      name: "runtime", // necessary when using multiple entrypoints on the same page
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // <-- !!IMPORTANT!!
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon-32x32.png",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  devServer: {
    open: true,
    port: 3000,
  },
}
