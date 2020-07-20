import WinnetouBase from "./_winnetouBase.js";
export default class Constructos extends WinnetouBase {
  /**
   * Div simples para inserção de texto
   * @param {object} [elements]
   * @param {string=} elements.titulo Titulo da div
   * @param {string=} elements.texto Texto a ser apresentado na simpleDiv
   * @param {object} [options]
   * @param {string=} options.identifier
   */
  simpleDiv = (elements, options) => {
    this._test(elements);
    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');
    return `
  <div id="win-simpleDiv-${identifier}" class="divGeral">
    <h1 id="win-h1TiTle-${identifier}">${elements.titulo || ""}</h1>
    <p id="win-pTexto-${identifier}">
      ${elements.texto || ""}
    </p>
  </div>
`;
  }

  /**
   * Span padrão para titulos de sessões
   * @param {object} elements
   * @param {string} elements.texto 
   * @param {object} [options]
   * @param {string=} options.identifier
   */
  spanTitle = (elements, options) => {
    this._test(elements);
    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');
    return `
  <span class="spanTitle" id="win-spanTitle-${identifier}">
    ${elements.texto}
  </span>
`;
  }
  /**
   * Span padrão para titulos de sessões
   * @param {object} elements
   * @param {string} elements.repetido 
   * @param {object} [options]
   * @param {string=} options.identifier
   */
  spanTitle2 = (elements, options) => {
    this._test(elements);
    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');
    return `
  <span class="spanTitle" id="win-spanTitle2-${identifier}">
    ${elements.repetido}
  </span>
`;
  }
}