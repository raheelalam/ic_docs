const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.join(__dirname, "src/js/"),
  entry: {
    script: "./script.js",
    "demo-script": "./trydemo-script.js",
  },
  output: {
    path: path.join(__dirname, "static/js"),
    filename: "[name].min.js",
  },
  plugins: [new ESLintPlugin()],
};
