import WinnetouBase from "./_winnetouBase.js";

/**
 * WinnetouJs Main Class
 * 
 */
class Winnetou extends WinnetouBase {
  // ========================================




  /**
   * Div simples para inserção de texto
   * @param {object} elements
   * @param {any=} elements.titulo Titulo da div
   * @param {any} elements.texto Texto a ser apresentado na simpleDiv
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  simpleDiv = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'simpleDiv', `simpleDiv-win-${identifier}`, elements);

    return {
      code: `
  <div id="simpleDiv-win-${identifier}" class="divGeral">
    <h1 id="h1TiTle-win-${identifier}">${elements.titulo || ""}</h1>
    <p id="pTexto-win-${identifier}">
      ${elements.texto}
    </p>
  </div>
`,
      ids: {
        simpleDiv: `simpleDiv-win-${identifier}`,
        h1TiTle: `h1TiTle-win-${identifier}`,
        pTexto: `pTexto-win-${identifier}`,
      },
    }
  }

  // ========================================




  /**
   * Span padrão para títulos de sessões
   * @param {object} elements
   * @param {any} elements.texto 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  spanTitle = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'spanTitle', `spanTitle-win-${identifier}`, elements);

    return {
      code: `
  <span class="spanTitle" id="spanTitle-win-${identifier}">
    ${elements.texto}
  </span>
`,
      ids: {
        spanTitle: `spanTitle-win-${identifier}`,
      },
    }
  }

  // ========================================




  /**
   * Post
   * @param {object} elements
   * @param {any} elements.nome 
   * @param {any} elements.actionProfile 
   * @param {any} elements.post 
   * @param {any} elements.comentarios 
   * @param {any} elements.curtidas 
   * @param {any} elements.Compartilhamentos 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  post = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'post', `post-win-${identifier}`, elements);

    return {
      code: `
  <div class="divTitle" id="post-win-${identifier}">
    <h1>${elements.nome}</h1>
    <button onclick="${elements.actionProfile}">Ver perfil</button>
    <h2>${elements.post}</h2>
    <h3>
      Comentários: ${elements.comentarios} | Curtidas: ${elements.curtidas} |
      Compartilhamentos: ${elements.Compartilhamentos}
    </h3>
    <div>
      <button onclick="comentar()">Comentar</button>
      <button onclick="curtir()">Curtir</button>
      <button onclick="compartilhar()">Compartilhar</button>
    </div>
  </div>
`,
      ids: {
        post: `post-win-${identifier}`,
      },
    }
  }

  // ========================================




  /**
   * Post
   * @param {object} elements
   * @param {any} elements.comentarios 
   * @param {any} elements.curtidas 
   * @param {any} elements.Compartilhamentos 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  notify = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'notify', `notify-win-${identifier}`, elements);

    return {
      code: `
  <div class="divTitle" id="notify-win-${identifier}">
    <h1>Suas notificações</h1>

    <h3>
      Comentários: ${elements.comentarios} <br>
      Curtidas: ${elements.curtidas} <br>
      Compartilhamentos: ${elements.Compartilhamentos}
    </h3>
  </div>
`,
      ids: {
        notify: `notify-win-${identifier}`,
      },
    }
  } // ========================================




  /**
   * 
   * @param {object} elements
   * @param {any} elements.nome 
   * @param {any} elements.descri 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  profile = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'profile', `profile-win-${identifier}`, elements);

    return {
      code: `
  <div id="profile-win-${identifier}">
    <h1>${elements.nome}</h1>
    <h2>${elements.descri}</h2>
  </div>
`,
      ids: {
        profile: `profile-win-${identifier}`,
      },
    }
  } // ========================================




  /**
   * Span padrão para titulos de sessões
   * @param {object} elements
   * @param {any} elements.repetido 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  spanTitle2 = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'spanTitle2', `spanTitle2-win-${identifier}`, elements);

    return {
      code: `
  <span class="spanTitle" id="spanTitle2-win-${identifier}">
    ${elements.repetido}
  </span>
`,
      ids: {
        spanTitle2: `spanTitle2-win-${identifier}`,
      },
    }
  } // ========================================




  /**
   * Mutables button
   * @param {object} elements
   * @param {any} elements.titulo 
   * @param {any} elements.texto 
   * @param {any} elements.action 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  testeMutables = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'testeMutables', `testeMutables-win-${identifier}`, elements);

    return {
      code: `
  <div id="testeMutables-win-${identifier}">
    <h1>${elements.titulo}</h1>
    <textarea cols="100" rows="20" id="text-win-${identifier}">${elements.texto}</textarea>
    <hr>
    <button onclick="${elements.action}">Save</button>
  </div>
`,
      ids: {
        testeMutables: `testeMutables-win-${identifier}`,
        text: `text-win-${identifier}`,
      },
    }
  }
}

export const W = new Winnetou();