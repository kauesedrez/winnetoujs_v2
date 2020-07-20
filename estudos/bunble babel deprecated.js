/**
 * Babel api
 *
 * https://www.npmjs.com/package/babel-core
 *
 */

const fs = require("fs");
const babel = require("@babel/core");
const UglifyJS = require("uglify-js");
const uuid = require("uuid/v4");
const request = require("request");
const UglifyCss = require("uglifycss");
const sass = require("sass");
const htmlMinify = require("html-minifier").minify;
const fse = require("fs-extra");
const path = require("path");

function bundle() {
  // primeiro teste com babel puxando os imports

  var result = babel.transformFileSync("./testeCompilador/file1.js", {
    presets: ["@babel/preset-env"],
    compact: false,
    retainLines: true,
  });
  console.log(result.code);
}

bundle();
