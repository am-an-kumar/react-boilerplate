const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "development",
  watch: true,
  devServer: {
    port: 9877,
    open: true,
    hot: true
  },
  devtool: "source-map"
});
