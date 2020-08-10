const webpack = require("webpack");
const path = require("path");

console.clear();
console.log("Bundler Node Webpack\n\n");

const compiler = webpack({
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "release"),
    filename: "winBundleRelease_4.js",
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
            plugins: [
              "@babel/plugin-proposal-class-properties",
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
});

compiler.run((e, s) => {
  console.log(e, s.compilation.errors);
});
