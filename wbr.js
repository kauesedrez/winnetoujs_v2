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

// Inicia o programa
createConstructosClass();

const l = (a, b) => {
  a || b ? console.log("\n============") : null;
  a ? console.dir(a) : null;
  b ? console.log(b) : null;
  a || b ? console.log("============") : null;
};

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
    class Constructos {
      _test(elements) {
        Object.keys(elements).forEach(key => {
          if (typeof elements[key] === 'object') {
            // é mutable
          }
        });
      }

      _getIdentifier(elements) {
        return "";
      }

      ${resultado}

    }
    `;

    resultadoFinal = beautify(resultadoFinal, {
      indent_size: 2,
      space_in_empty_paren: true,
    });

    // agora tenho a class Constructos pronta na variavel resultadoFinal
    // agora tenho que salvar o arquivo

    await fs.outputFile("./.generatedConstructos.js", resultadoFinal);

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
          let constructo = componente.innerHTML;

          //Todo:
          // lógica dos ids

          let id = constructo.match(/\[\[\s?(.*?)\s?\]\]/)[1];

          // elements replace
          // tenho que achar todos os elements dentro do constructo
          let regex = new RegExp("{{\\s*?(.*?)\\s*?}}", "g");

          let matches = constructo.match(regex);

          matches.forEach(match => {
            l("match", match);
            //match contem o element puro
            //match = "{{texto % Texto a ser apresentado na simpleDiv}}"

            //obtem o element => el = 'texto % pipipipopopo'
            let el = match.replace("{{", "");
            el = el.replace("}}", "");

            l("el", el);

            // verifica se tem comentario o jsdoc
            let elArr = el.split("%");

            // verifica se o element é obrigatório ou opcional
            let obrigatorio = false;
            if (elArr[0].indexOf("?") != -1) {
              // é obrigatorio
              obrigatorio = false;
            } else {
              // é opcional
              obrigatorio = true;
            }

            //remove o ? do element e aplica o trim
            // agora temos o element => el = 'texto'
            // e o comentario jsdoc em comentario
            el = elArr[0].replace("?", "").trim();
            let comentario = elArr[1] || "";

            //Todo:
            // Comentário jsdoc

            l("el apos trim", el);
            l("constructo", constructo);

            // transforma o match em uma regexp aceitável
            let escapedString = escapeStringRegexp(match);

            // faz o replace no constructo
            constructo = constructo.replace(
              new RegExp(escapedString, "g"),
              "${elements." + el + (obrigatorio ? "" : ' || ""') + "}"
            );

            l("constructo apos replace", constructo);
          });

          // agora tenho que transformar o componente em metodo
          let retorno =
            id +
            " = elements => {" +
            "this._test(elements);" +
            "let identifier = this._getIdentifier(elements);" +
            "return `" +
            constructo +
            "`;" +
            "}" +
            " ";

          retornoTotal += retorno;
        });

        return resolve(
          beautify(retornoTotal, { indent_size: 2, space_in_empty_paren: true })
        );
      });
    } catch (e) {
      return reject(e.message);
    }
  });
}
