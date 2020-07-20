const webpack = require("webpack");
const path = require("path");

console.clear();
console.log("Bundler Node Webpack\n\n");

const compiler = webpack({
  entry: "./file1.js",
  output: {
    path: path.resolve(__dirname, "release"),
    filename: "winBundleRelease_2.js",
  },
});

compiler.run((e, s) => {
  console.log(e, s);
});
