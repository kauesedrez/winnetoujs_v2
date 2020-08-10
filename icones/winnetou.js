import {
  WinnetouBase
} from "./node_modules/winnetoujs/src/_winnetouBase.js";

/**
 * WinnetouJs Main Class
 * 
 */
//@ts-ignore
class _Winnetou extends WinnetouBase {
  constructor() {
    super();



    /**
     * Object containing all available constructos. 
     * @private */
    this.Constructos = {
      divSimples: this.divSimples,
      icons_delete: this.icons_delete,
      slideScreen: this.slideScreen,
      screen: this.screen
    }
  }

  // ========================================




  /**
   * 
   * @param {object} elements
   * @param {any} elements.texto 
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  divSimples = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'divSimples', `divSimples-win-${identifier}`, elements);

    return {
      code: `
  <div id="divSimples-win-${identifier}">
    ${elements?.texto}
  </div>
`,
      ids: {
        divSimples: `divSimples-win-${identifier}`,
      },
    }
  } // ========================================




  /**
   * Create an icon **icons_delete**
   * @param {object} [elements]
   * @param {any=} elements.class Class for the icon
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  icons_delete = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'icons_delete', `icons_delete-win-${identifier}`, elements);

    return {
      code: `
  <svg viewBox="0 0 448 512" id="icons_delete-win-${identifier}" class="${elements?.class || ""}">
  <path data-fill="currentColor" d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z" class=""></path>
</svg>`,
      ids: {
        icons_delete: `icons_delete-win-${identifier}`,
      },
    }
  } // ========================================




  /**
   * 
   * @param {object} [elements]
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  slideScreen = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'slideScreen', `slideScreen-win-${identifier}`, elements);

    return {
      code: `
  <div class="slideScreen" id="slideScreen-win-${identifier}"></div>
`,
      ids: {
        slideScreen: `slideScreen-win-${identifier}`,
      },
    }
  }

  // ========================================




  /**
   * 
   * @param {object} [elements]
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  screen = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'screen', `screen-win-${identifier}`, elements);

    return {
      code: `
  <div class="screen" id="screen-win-${identifier}"></div>
`,
      ids: {
        screen: `screen-win-${identifier}`,
      },
    }
  }

}

// @ts-ignore
export const Winnetou = new _Winnetou();
// @ts-ignore
export const Constructos = Winnetou.Constructos;
/**
 * Object containing all available constructos. 

*/
// @ts-ignore
export const Strings = Winnetou.strings;