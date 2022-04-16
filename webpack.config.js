const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  resolve: {
    extensions: ["", ".js", ".jsx",".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
    },
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
    },
    {
      test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader"],
  },
  {
      test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      use: ["file-loader"],
  },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    open: true,
    port: 3000,
  },
};
