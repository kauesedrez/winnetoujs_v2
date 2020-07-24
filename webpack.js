const webpack = require("webpack");
const path = require("path");

console.clear();
console.log("Bundler Node Webpack\n\n");

const compiler = webpack({
  entry: "./bundleTeste.js",
  output: {
    path: path.resolve(__dirname, "release"),
    filename: "winBundleRelease_3.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
});

compiler.run((e, s) => {
  console.log(e, s.compilation.errors);
});
