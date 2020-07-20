// import Winnetou from "./winnetou";
// const Winnetou = require("./winnetou");

// <div class="winnetou">
//   <h1 id="[[h1]]" style="color:{{cor:blue}}">{{ titulo:h1title }}</h1>
// </div>;

class Constructos {
  _test(elements) {
    Object.keys(elements).forEach(key => {
      if (typeof elements[key] === Object) {
        // é mutable
      }
    });
  }

  _getIdentifier(elements) {
    return "";
  }

  /**
   * Constructo de H1 Básico
   * @param {object} elements
   * @param {string} elements.cor
   * @param {string} elements.titulo
   */
  h1 = elements => {
    this._test(elements);

    return `<h1 style="color:${elements.cor || "red"}">${
      elements.titulo || "h1Title"
    }</h1>`;
  };

  /**
   * Div simples para inserção de texto
   * @param {object} elements
   * @param {?string} elements.titulo
   * @param {string} elements.texto Texto a ser apresentado na simpleDiv
   */
  simpleDiv = elements => {
    this._test(elements);
    let identifier = this._getIdentifier(elements);
    return `
    <div id="${identifier}">
      <h1 id="">${elements.titulo || ""}</h1>
      <p id="">
        ${elements.texto || "Olá mundo"}
      </p>
    </div>`;
  };
}

//--------------------------

const W = new Constructos();

W.simpleDiv({ texto: "Bem-vindo" });

// C.h1({
//   cor: {
//     mutable: "cor",
//   },
//   titulo: "Teste",
// });

// const componenteBoasVindas = (texto, cor) => C.h1(C.simpleSpan(texto), cor);

// console.log(componenteBoasVindas(W.strings.welcome, "blue"));
