const path = require("path");
const webpack = require("webpack");
const rucksack = require("rucksack-css");

const webpackHotMiddleware = "webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr";

module.exports = {
  devtool: "cheap-module-eval-source-map",
  context: path.join(__dirname, "./src/front"),
  entry: {
    js: ["./app.js", webpackHotMiddleware],
    vendor: ["react", webpackHotMiddleware]
  },
  output: {
    path: path.join(__dirname, "lib/public"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        include: /src/,
        loaders: [
          "style-loader",
          "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
          "postcss-loader"
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loader: "style!css"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
