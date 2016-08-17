const webpack = require("webpack");
const path = require("path");
const rucksack = require("rucksack-css");
const Dashboard = require("webpack-dashboard");
const DashboardPlugin = require("webpack-dashboard/plugin");
const dashboard = new Dashboard();

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: {
    js: "./app.js",
    html: "./index.html",
    vendor: ["react"],
  },
  output: {
    path: "dist",
    filename: "bundle.js",
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
    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    contentBase: "./src",
    hot: true,
    quiet: true
  }
};
