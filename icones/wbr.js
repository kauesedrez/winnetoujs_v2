/**
 * ==========================
 * W B R                    =
 * Winnetou Bundle Release  =
 * ==========================
 *
 * MIT License
 *
 * Copyright 2020 Winnetou Kaue Sedrez Bilhalva https://github.com/kauesedrez
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

// REQUIRES ====================================================

const fs = require("fs-extra");
const path = require("path");
const recursive = require("recursive-readdir");
const htmlParser = require("node-html-parser");
const beautify = require("js-beautify").js;
const prettify = require("html-prettify");
const escapeStringRegexp = require("escape-string-regexp");
const xml = require("xml-parse");
const sass = require("sass");
const UglifyCss = require("uglifycss");
const figlet = require("figlet");
const chalk = require("chalk");

// GLOBAL VARIABLES =============================================

let idList = [],
  Config,
  promisesCss = [];

// INITIALIZER =================================================

main();

// DRAW METHODS ===============================================

// #region

var contadorDeErros = 0;
var contadorDeWarnings = 0;

const drawLine = (size = 80) => {
  let line = "";
  for (let i = 0; i < size; i++) {
    if (i == 1) line += " ";
    else if (i == size - 2) line += " ";
    else line += "=";
  }
  console.log(line);
};

const drawText = (text = "", params) => {
  let color = "";

  if (params?.color) {
    switch (params.color) {
      case "cyan":
        color = "\x1b[36m";
        break;

      case "yellow":
        color = "\x1b[33m";
        break;

      case "green":
        color = "\x1b[32m";
        break;

      case "red":
        color = "\x1b[31m";
        break;

      case "error":
        color = "\x1b[41m\x1b[37m";
        break;

      case "bright":
        color = "\x1b[1m";
        break;

      case "dim":
        color = "\x1b[2m";
        break;
    }
  }

  let line = "= " + color + text + "\x1b[0m";

  let tamanho = text.length + 2;

  let size = params?.size || 80;

  for (let i = 0; i < size - tamanho; i++) {
    if (i == size - tamanho - 1) line += "=";
    else line += " ";
  }

  console.log(line);
};

const drawTextBlock = text => {
  let arr = text.match(/.{1,74}/g);

  arr.forEach(item => {
    drawText(item);
  });
};

const drawBlankLine = () => {
  drawText();
};

const drawSpace = () => {
  console.log("\n");
};

const drawError = text => {
  contadorDeErros++;
  drawLine();
  drawBlankLine();
  console.log("\x1b[1;37;41m");
  drawText("[ X ] Error");
  console.log("\x1b[0m");
  drawBlankLine();
  drawTextBlock(text);
  drawBlankLine();
  drawText("Find online help in");
  drawText("www.cedrosdev.com.br/winnetoujs");
  drawBlankLine();
  drawLine();
  drawSpace();
};

const drawWarning = text => {
  contadorDeWarnings++;
  drawLine();
  drawBlankLine();
  drawText("[ ! ] Warning");
  drawBlankLine();
  drawLine();
  drawBlankLine();
  drawTextBlock(text);
  drawBlankLine();
  drawText("Find online help in");
  drawText("www.cedrosdev.com.br/winnetoujs");
  drawBlankLine();
  drawLine();
  drawSpace();
};

const drawWelcome = () => {
  console.clear();
  drawLine();
  drawBlankLine();
  drawBlankLine();
  drawText("W I N N E T O U J S ", { color: "bright" });
  drawBlankLine();
  drawText(
    "T h e  i n d i e  j a v a s c r i p t  c o n s t r u c t o r",
    { color: "dim" }
  );
  drawBlankLine();
  drawText("WinnetouJs.org", { color: "yellow" });

  drawBlankLine();
  drawBlankLine();
  drawLine();
  drawBlankLine();
  drawText("Find online help and docs", { color: "dim" });
  drawText("https://winnetoujs.org/docs");
  drawBlankLine();
  drawText("Fork on GitHub", { color: "dim" });
  drawText("https://github.com/cedrosdev/WinnetouJs.git");
  drawBlankLine();
  drawText("(c) 2020 Cedros Development (https://cedrosdev.com)", {
    color: "dim",
  });
  drawBlankLine();
  drawLine();
  drawBlankLine();
  drawBlankLine();
  drawLine();
  drawSpace();
};

const drawAdd = text => {
  console.log("> [added] " + text);
};

const drawAddError = text => {
  contadorDeErros++;

  console.log("\n> [error on add (skip)] " + text + "\n");
};

const drawHtmlMin = text => {
  console.log("> [html minifield] " + text);
};

const drawEnd = text => {
  console.log("> [Bundle Release Finished] " + text);
};

const drawChange = text => {
  console.log("> [Modified file] " + text);
};

const drawFinal = () => {
  drawLine();
  drawBlankLine();
  drawText("All tasks completed");
  drawBlankLine();
  if (contadorDeErros > 0) {
    drawText("... with " + contadorDeErros + " errors");
    drawBlankLine();
  }
  if (contadorDeWarnings > 0) {
    drawText("... with " + contadorDeWarnings + " warnings");
    drawBlankLine();
  }

  drawLine();
  drawSpace();
};

drawWelcome();

// #endregion

// MAIN METHODS ================================================

function fixedJson(badJSON) {
  let a = badJSON

    .replace("{", "")
    .replace("}", "")
    .replace("export default", "")
    .replace(";", "")

    .split(",")

    .filter(x => typeof x === "string" && x.trim().length > 0)

    .join(",")

    // Replace ":" with "@colon@" if it's between double-quotes
    .replace(/:\s*"([^"]*)"/g, function (match, p1) {
      return ': "' + p1.replace(/:/g, "@colon@") + '"';
    })

    // Replace ":" with "@colon@" if it's between single-quotes
    .replace(/:\s*'([^']*)'/g, function (match, p1) {
      return ': "' + p1.replace(/:/g, "@colon@") + '"';
    })

    // Add double-quotes around any tokens before the remaining ":"
    .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ')

    // Turn "@colon@" back into ":"
    .replace(/@colon@/g, ":");

  return JSON.parse(`{${a}}`);
}

function l(a, b) {
  return;
  a || b ? console.log("\n============") : null;
  a ? console.dir(a) : null;
  b ? console.log(b) : null;
  a || b ? console.log("============") : null;
}

async function main() {
  let data = await fs.readFile("./win.config.js", "utf-8");

  Config = fixedJson(data);

  if (Config?.css || Config?.sass) {
    mainCss();
  }
  await icons();

  const constructosPath = Config.constructosPath;

  let resultado = "";
  let constructos = [];

  recursive(constructosPath, async (err, files) => {
    recursive("./node_modules", async (err2, files2) => {
      files2 = files2
        .filter(x => x.includes("win-"))
        .filter(x => x.includes(".htm") || x.includes(".html"));

      if (files2.length > 0) {
        try {
          files = files.concat(files2);
        } catch (e) {
          console.log("e :>> ", e);
        }
      }

      for (let file in files) {
        try {
          let arquivo = files[file];

          if (typeof arquivo === "string") {
            let ext = path.parse(path.join(__dirname, arquivo)).ext;
            // apenas se for html ou htm
            if (ext == ".html" || ext == ".htm") {
              let constructoMethods = await transformarConstructo(
                arquivo
              );
              resultado += constructoMethods.method;
              constructos.push(constructoMethods.constructosList);
            }
          }
        } catch (e) {
          console.log("Winnetou error", e.message);
        }
      }

      // tradução
      let translate_;
      if (Config?.defaultLang) {
        translate_ = await translate();
      }

      let resultadoFinal = `
        import {WinnetouBase} from  "./node_modules/winnetoujs/src/_winnetouBase.js";

        /**
         * WinnetouJs Main Class
         * 
         */
        //@ts-ignore
        class _Winnetou extends WinnetouBase {
          constructor(){
            super();

            ${translate_ ? translate_.res : ""}

            /**
             * Object containing all available constructos. 
             * @private */
            this.Constructos = {
              ${constructos.filter(x => x.length > 0).join(",")}
            }
          }

            ${resultado}
          
        }

        // @ts-ignore
        export const Winnetou = new _Winnetou();
        // @ts-ignore
        export const Constructos = Winnetou.Constructos;
        /**
         * Object containing all available constructos. 
        ${translate_ ? translate_.jsdoc : ""}
        */
        // @ts-ignore
        export const Strings = Winnetou.strings;

    `;

      resultadoFinal = beautify(resultadoFinal, {
        indent_size: 2,
        space_in_empty_paren: true,
      });

      // agora tenho a class Constructos pronta na variável resultadoFinal
      // agora tenho que salvar o arquivo

      await fs.outputFile("./winnetou.js", resultadoFinal);

      console.log("\n\n\nConstructos Class gerado com sucesso.");
    });
  });
}

async function icons() {
  return new Promise(async (resolve, reject) => {
    /**
     * Todo:
     * coloredIcons
     */

    let constructoIcons = "";

    const iconsPath = Config.icons;

    if (iconsPath) {
      let files = await recursive(iconsPath);
      for (let c = 0; c < files.length; c++) {
        let transpiledIcon = await transpileIcon(files[c]);
        constructoIcons += transpiledIcon;
      }
    }

    const coloredIconsPath = Config.coloredIcons;

    if (coloredIconsPath) {
      let files = await recursive(coloredIconsPath);
      for (let c = 0; c < files.length; c++) {
        let transpiledIcon = await transpileColoredIcon(files[c]);
        constructoIcons += transpiledIcon;
      }
    }

    if (constructoIcons !== "") {
      await fs.outputFile(
        path.join(Config.constructosPath, "icons.html"),
        prettify(constructoIcons)
      );
      return resolve();
    } else {
      return reject();
    }
  });
}

async function transpileIcon(iconPath) {
  return new Promise((resolve, reject) => {
    let xmlString = fs.readFileSync(iconPath, "utf8");

    let regPath = /[a-zA-Z]+/g;

    let id = iconPath.match(regPath);

    id = id.filter(x => x != "svg");

    id = id.join("_");

    let regVb = new RegExp('viewBox="(.*?)"', "gis");

    let reg = new RegExp("<svg(.*?)>(.*?)</svg>", "is");

    if (xmlString) {
      // trata o svg

      let viewBox = xmlString.match(regVb);

      let arr = xmlString.match(reg);

      let symbol = `
      <winnetou description="Create an icon **${id}**">
      <svg ${viewBox} id="[[${id}]]" class="winIcons {{?class%Class for the icon}}">`;

      // limpa o fill para poder se trocar o fill
      // via css
      let cleanFill = arr[2].replace("fill", "data-fill");

      symbol += cleanFill;

      symbol += `</svg></winnetou>`;

      // agora tenho um array de paths
      // tenho que colocar dentro do symbol

      return resolve(symbol);
    } else {
      return reject();
    }
  });
}

async function transpileColoredIcon(iconsPath) {
  console.log("dentro do transpile", iconsPath);
  return new Promise((resolve, reject) => {
    let xmlString = fs.readFileSync(iconsPath, "utf8");

    let regPath = /[a-zA-Z]+/g;

    let id = iconsPath.match(regPath);

    id = id.filter(x => x != "svg");

    id = id.join("_");

    let regVb = new RegExp('viewBox="(.*?)"', "gis");

    let reg = new RegExp("<svg(.*?)>(.*?)</svg>", "is");

    if (xmlString) {
      // trata o svg

      let viewBox = xmlString.match(regVb);

      let arr = xmlString.match(reg);

      // let symbol = `<symbol ${viewBox} id="${id}">`;

      let symbol = `
      <winnetou description="Create an colored icon **${id}**">
      <svg ${viewBox} id="[[${id}]]" class="winColoredIcons {{?class%Class for the colored icon}}">`;

      // let cleanFill = arr[2].replace("fill", "data-fill");

      let cleanFill = arr[2];

      symbol += cleanFill;

      // symbol += `</symbol>`;

      symbol += `</svg></winnetou>`;

      // agora tenho um array de paths
      // tenho que colocar dentro do symbol

      return resolve(symbol);
    } else {
      return reject();
    }
  });
}

async function translate() {
  return new Promise((resolve, reject) => {
    if (!Config?.folderName) {
      console.error(
        "WinnetouJs Translation Miss Configuration Error:You have to specify the name of winnetou folder in order to use the translations;"
      );

      return reject({ err: "erro" });
    }

    if (Config.folderName === "/") Config.folderName = "";
    Config.folderName = path.join(
      __dirname,
      Config.folderName,
      "/translations"
    );

    let strings = "";
    let jsdoc = "";

    fs.readFile(
      `${Config.folderName}/${Config.defaultLang}.xml`,
      "utf-8",
      function (err, data) {
        let trad = xml.parse(data)[0].childNodes;

        trad.forEach(item => {
          if (item.tagName && item.childNodes[0]?.text) {
            strings += `/** @property ${item.childNodes[0].text.trim()} */           
            ${item.tagName}: "${item.childNodes[0].text.trim()}",
            `;

            jsdoc += `
          * @param {string} ${
            item.tagName
          } ${item.childNodes[0].text.trim()}`;
          }
        });

        let res = `
        
          /**
           * Object containing the strings taken from the translation file    
           * @private       
          */
          this.strings = {
            ${strings}
          }
        
        `;

        return resolve({ res, jsdoc });
      }
    );
  });
}

async function transformarConstructo(arquivo) {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(arquivo, "utf-8", function (err, data) {
        if (err) return reject(err);

        // transforma o html em método
        let dom = htmlParser.parse(data);
        let componentes = dom.querySelectorAll("winnetou");
        let retornoTotal = "";
        let constructos = [];

        Array.from(componentes).forEach(componente => {
          let descri = componente.getAttribute("description");
          let constructo = componente.innerHTML;
          let jsdoc =
            "\n\n// ========================================\n\n\n";
          jsdoc += "\n\n/**\n";
          jsdoc += `\t* ${descri || ""}\n`;
          let elementsObrigatorio = false;
          let jsdoc2 = "";

          l("descri", descri);

          // todo:
          // [ok] lógica dos ids
          // ao chamar o método da classe Constructos tem que criar o
          // id automaticamente, win-simpleDiv-1

          let id = constructo.match(/\[\[\s?(.*?)\s?\]\]/)[1];
          let pureId = id + "-win-${identifier}";

          //verifica se o id é repetido
          let verifica = idList.filter(data => data.id === id);

          if (verifica.length > 0) {
            console.log(
              `O constructo ${id} do arquivo ${arquivo} está duplicado`
            );

            console.log(
              `Arquivo original: ${verifica[0].arquivo}\n\n`
            );
            throw new Error("id-001");
          }

          idList.push({
            arquivo,
            id,
          });

          // ===========================================
          // ids replace ===============================
          // ===========================================

          // Isso aqui para retornar os ids

          var regId = /\[\[\s*?(.*?)\s*?\]\]/g;
          var matchIds = constructo.match(regId);
          var ids = "ids:{";
          matchIds = matchIds.map(item =>
            item.replace("[[", "").replace("]]", "")
          );
          matchIds = matchIds.map(
            item => item + "-win-${identifier}"
          );

          matchIds.forEach(item => {
            let nome = item.split("-win-")[0];
            ids += nome + ":`" + item + "`,";
          });

          ids += "},";

          constructo = constructo.replace(
            /\[\[\s*?(.*?)\s*?\]\]/g,
            "$1-win-${identifier}"
          );

          // ===========================================
          // elements replace ==========================
          // ===========================================

          // tenho que achar todos os elements dentro do constructo
          let regex = new RegExp("{{\\s*?(.*?)\\s*?}}", "g");

          let matches = constructo.match(regex);

          if (matches) {
            matches.forEach(match => {
              //match contem o element puro
              //match = "{{texto % Texto a ser apresentado na simpleDiv}}"

              //obtem o element => el = 'texto % pipipipopopo'
              let el = match.replace("{{", "");
              el = el.replace("}}", "");

              // verifica se tem comentario o jsdoc
              let elArr = el.split("%");

              // verifica se o element é obrigatório ou opcional
              let obrigatorio = false;
              if (elArr[0].indexOf("?") != -1) {
                // é opcional
                // quando tem o ? antes do element
                // quer dizer que o mesmo é opcional
                obrigatorio = false;
              } else {
                // é obrigatorio
                obrigatorio = true;
                elementsObrigatorio = true;
              }

              //remove o ? do element e aplica o trim
              // agora temos o element => el = 'texto'
              // e o comentario jsdoc em comentario
              el = elArr[0].replace("?", "").trim();
              let comentario = elArr[1] || "";

              // todo:
              // [ok] Comentário jsdoc

              l(el);
              l(obrigatorio ? "obrigatorio" : "opcional", comentario);

              jsdoc2 += `\t* @param {any${
                obrigatorio ? "" : "="
              }} elements.${el} ${comentario.trim()}\n`;

              // transforma o match em uma regexp aceitável
              let escapedString = escapeStringRegexp(match);

              // faz o replace no constructo
              constructo = constructo.replace(
                new RegExp(escapedString, "g"),
                "${(elements?." +
                  el +
                  (obrigatorio ? "" : ' || ""') +
                  ")}"
              );
            });
          }

          if (elementsObrigatorio)
            jsdoc += "\t* @param {object} elements\n";
          else jsdoc += "\t* @param {object} [elements]\n";

          jsdoc += jsdoc2;

          jsdoc += "\t* @param {object} [options]\n";
          jsdoc += "\t* @param {any=} options.identifier\n";
          jsdoc += "\t* @private\n";
          jsdoc += "\t*/\n";

          // agora tenho que transformar o componente em método
          let retorno =
            jsdoc +
            id +
            " = (elements, options) => {" +
            "\n\nlet identifier = this._getIdentifier(options?options.identifier || 'notSet':'notSet');" +
            "\n\nelements = this._test(identifier,'" +
            id +
            "',`" +
            pureId +
            "`,elements);" +
            "let component;" +
            "let obj = {" +
            "code(elements) {" +
            "return `" +
            constructo +
            "`" +
            "}," +
            `
            
          /**
           * Create Winnetou Constructo        
           * @param  {string} output The node or list of nodes where the component will be created
           * @param  {object} [options] Options to control how the construct is inserted. Optional.
           * @param  {boolean} [options.clear] Clean the node before inserting the construct
           * @param  {boolean} [options.reverse] Place the construct in front of other constructs
           */
            
            ` +
            '"create":(output,options) => {' +
            "this.create(component,output, options);" +
            "return {" +
            ids +
            "}" +
            "}" + // fechamento create
            "}" + // fechamento let obj
            "component = obj.code(elements);" +
            "return obj;" +
            // -------------------------
            "}"; // fechamento do método
          // ---------------------------

          // "\n\nreturn {code:`" +
          // constructo +
          // "`," +
          // ids +
          // "}}" +
          // " ";

          retornoTotal += retorno;
          constructos.push(`${id}: this.${id}`);
        });

        return resolve({
          method: beautify(retornoTotal, {
            indent_size: 2,
            space_in_empty_paren: true,
          }),
          constructosList: constructos,
        });
      });
    } catch (e) {
      return reject(e.message);
    }
  });
}

async function mainCss() {
  if (Config.sass) {
    recursive(Config.sass, async (err, files) => {
      console.log("files :>> ", files);
      files.forEach(file => {
        promisesCss.push(transpileSass(file));
      });
      css();
    });
  }

  function css() {
    if (Config.css) {
      // vai ler o diretório do css
      recursive(Config.css, async (err, files) => {
        files.forEach(file => {
          promisesCss.push(getData(file));
        });
        exec_();
      });
    } else {
      exec_();
    }
  }
}

function exec_() {
  Promise.all(promisesCss).then(data => {
    // data contem um array com todo o meu css
    data.push(`    
    * {
    -webkit-overflow-scrolling: touch;
      }   
      .winnetou_display_none {
          display: none !important;
      }                
    `);

    let result = UglifyCss.processString(data.join("\n"));

    fs.outputFile(
      Config.out + "/bundleWinnetouStyles.min.css",
      result,
      function (err) {
        if (err) {
        }
        console.log("CSS and SASS ok");
      }
    );
  });
}

async function transpileSass(file) {
  return new Promise((resolve, reject) => {
    sass.render(
      {
        file,
      },
      function (err, result) {
        if (err) return reject(err);
        return resolve(result.css.toString());
      }
    );
  });
}

async function getData(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err, data) {
      if (err) return reject(err);
      return resolve(data.toString());
    });
  });
}
