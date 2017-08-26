const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 8080
  }
};
