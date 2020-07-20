/**
 * ==========================
 * W B R                    =
 * Winnetou Bundle Release  =
 * ==========================
 *
 */

const Config = require("./win.config.js");
const fs = require("fs-extra");
const path = require("path");
const recursive = require("recursive-readdir");
const htmlParser = require("node-html-parser");
const { default: Matcher } = require("node-html-parser/dist/matcher");
const beautify = require("js-beautify").js;
const escapeStringRegexp = require("escape-string-regexp");

var idList = [];

// Inicia o programa
createConstructosClass();

function l(a, b) {
  a || b ? console.log("\n============") : null;
  a ? console.dir(a) : null;
  b ? console.log(b) : null;
  a || b ? console.log("============") : null;
}

/**
 * Create Constructos class from source constructos folder.
 */
async function createConstructosClass() {
  const constructosPath = Config.constructosPath;
  let dir = fs.readdirSync(constructosPath);

  let resultado = "";

  recursive(constructosPath, async (err, files) => {
    // `files` is an array of file paths

    for (let file in files) {
      let arquivo = files[file];
      let ext = path.parse(path.join(__dirname, arquivo)).ext;
      // apenas se for html ou htm
      if (ext == ".html" || ext == ".htm") {
        let constructoMethods = await transformarConstructo(arquivo);
        resultado += constructoMethods;
      }
    }

    // agora tenhos os metodos na variavel resultado

    let resultadoFinal = `
    import WinnetouBase from "./_winnetouBase.js";
    export default class Constructos extends WinnetouBase {
      ${resultado}
    }
    `;

    resultadoFinal = beautify(resultadoFinal, {
      indent_size: 2,
      space_in_empty_paren: true,
    });

    // agora tenho a class Constructos pronta na variavel resultadoFinal
    // agora tenho que salvar o arquivo

    await fs.outputFile("./_generatedConstructos.js", resultadoFinal);

    console.log("\n\n\nConstructos Class gerado com sucesso.");
  });
}
/**
 * Vai ler o arquivo html e transformar em um método js
 * que será colocado dentro da classe Constructos
 * @param  {string} arquivo caminho do arquivo
 * @returns **Promise** código js do método
 */
async function transformarConstructo(arquivo) {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(arquivo, "utf-8", function (err, data) {
        if (err) return reject(err);

        // transforma o html em método
        let dom = htmlParser.parse(data);
        let componentes = dom.querySelectorAll(".winnetou");
        let retornoTotal = "";

        Array.from(componentes).forEach(componente => {
          let descri = componente.getAttribute("description");
          let constructo = componente.innerHTML;
          let jsdoc = "\n\n/**\n";
          jsdoc += `\t* ${descri || ""}\n`;
          let elementsObrigatorio = false;
          let jsdoc2 = "";

          l("descri", descri);

          // todo:
          // [ok] lógica dos ids
          // ao chamar o metodo da classe Constructos tem que criar o
          // id automaticamente, win-simpleDiv-1

          let id = constructo.match(/\[\[\s?(.*?)\s?\]\]/)[1];

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

          /*
          // Isso aqui para retornar os ids

          var regId = /\[\[\s*?(.*?)\s*?\]\]/g;
          var matchIds = constructo.match(regId);
          matchIds = matchIds.map(item => item.replace("[[", "").replace("]]", ""));
          matchIds = matchIds.map(item => "win-" + item + "-${identifier}");

           matchIds.forEach(item => {
             let nome = item.split("-win-")[0];
             retorno[nome] = "#" + item;
           });
           */

          constructo = constructo.replace(
            /\[\[\s*?(.*?)\s*?\]\]/g,
            "win-$1-${identifier}"
          );

          // ===========================================
          // elements replace ==========================
          // ===========================================

          // tenho que achar todos os elements dentro do constructo
          let regex = new RegExp("{{\\s*?(.*?)\\s*?}}", "g");

          let matches = constructo.match(regex);

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

            jsdoc2 += `\t* @param {string${
              obrigatorio ? "" : "="
            }} elements.${el} ${comentario.trim()}\n`;

            // transforma o match em uma regexp aceitável
            let escapedString = escapeStringRegexp(match);

            // faz o replace no constructo
            constructo = constructo.replace(
              new RegExp(escapedString, "g"),
              "${elements." + el + (obrigatorio ? "" : ' || ""') + "}"
            );
          });

          if (elementsObrigatorio)
            jsdoc += "\t* @param {object} elements\n";
          else jsdoc += "\t* @param {object} [elements]\n";

          jsdoc += jsdoc2;

          jsdoc += "\t* @param {object} [options]\n";
          jsdoc += "\t* @param {string=} options.identifier\n";
          jsdoc += "\t*/\n";

          // agora tenho que transformar o componente em metodo
          let retorno =
            jsdoc +
            id +
            " = (elements, options) => {" +
            "this._test(elements);" +
            "let identifier = this._getIdentifier(options?options.identifier || 'notSet':'notSet');" +
            "return `" +
            constructo +
            "`;" +
            "}" +
            " ";

          retornoTotal += retorno;
        });

        return resolve(
          beautify(retornoTotal, {
            indent_size: 2,
            space_in_empty_paren: true,
          })
        );
      });
    } catch (e) {
      return reject(e.message);
    }
  });
}
