export default class WinnetouBase {
  constructor() {
    /**
     * @protected
     */
    this._constructoId = 0;
  }

  /**
   * @protected
   */
  _test(elements) {
    Object.keys(elements).forEach(key => {
      if (typeof elements[key] === "object") {
        // é mutable
      }
    });
  }

  /**
   * @protected
   * @param  {string=} identifier
   */
  _getIdentifier(identifier) {
    if (identifier != "notSet") return identifier;
    else return ++this._constructoId;
  }
}
