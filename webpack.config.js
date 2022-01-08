const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  stats: {
    modules: false,
  },
  devtool: "eval-cheap-module-source-map",
};
