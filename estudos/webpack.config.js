const path = require("path");

module.exports = {
  entry: "./file1.js",
  output: {
    path: path.resolve(__dirname, "release"),
    filename: "winBundleRelease.js",
  },
};
