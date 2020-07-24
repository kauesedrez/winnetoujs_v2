/**
 * WinnetouJs Base Class
 */
export default class WinnetouBase {
  constructor() {
    /**
     * Incrementable id when no specific indentifier is given
     * @protected
     * @type {number}
     */
    this.constructoId = 0;

    /**
     * Variable that stores mutables who should not have been
     * persistent when updating the application
     * @protected
     * @type {array}
     */
    this.mutable = [];

    /**
     * List of constructos that are subscribed to the mutable listener
     * @protected
     * @type {array}
     */
    this.usingMutable = [];
  }

  /**
   * @protected
   *
   */
  _test(identifier, id, pureId, elements) {
    let retorno = JSON.parse(JSON.stringify(elements));
    Object.keys(elements).forEach(item => {
      if (typeof elements[item] === "object") {
        // é mutable
        // precisa registrar este constructo para ser alterado
        // pelo setMutable
        // não devo usar variáveis e sim localstorage
        // sabemos que variáveis não são confiáveis

        //atualiza o elements para retornar atualizado
        let mutable = elements[item].mutable;
        let val = this.getMutable(mutable) || "";

        // agora tenho que salvar o constructo
        if (!this.usingMutable[elements[item].mutable])
          this.usingMutable[elements[item].mutable] = [];

        let obj = {
          identifier,
          id,
          pureId,
          elements,
        };

        // apenas faz o push caso o pureId ainda não exista

        if (
          this.usingMutable[elements[item].mutable].filter(
            x => x.pureId == pureId
          ).length > 0
        ) {
          // do nothing
        } else {
          this.usingMutable[elements[item].mutable].push(obj);
        }

        retorno[item] = val;
      }
    });

    return retorno;
  }

  /**
   * @protected
   * @param  {string=} identifier
   */
  _getIdentifier(identifier) {
    if (identifier != "notSet") return identifier;
    else return ++this.constructoId;
  }

  /**
   * Create Winnetou Constructo
   * @param  {string} component The component to be inserted
   * @param  {string} output The node or list of nodes where the component will be created
   * @param  {object} [options] Options to control how the construct is inserted. Optional.
   * @param  {boolean} [options.clear] Clean the node before inserting the construct
   * @param  {boolean} [options.reverse] Place the construct in front of other constructs
   */
  create(component, output, options) {
    let frag = document
      .createRange()
      .createContextualFragment(component);
    let el = document.querySelectorAll(output);

    el.forEach(item => {
      // options
      if (options && options.clear) item.innerHTML = "";
      // @ts-ignore
      if (options && options.reverse) item.prependChild(frag);
      else item.appendChild(frag);
    });
  }

  /**
   * Sets the value of passed winnetou mutable
   * @param {string} mutable string that represents a winnetou mutable
   * @param {string} value string value to be associated to mutable
   * @param {boolean=} localStorage bool to save the state on the machine at the user, true by default
   */
  setMutable(mutable, value, localStorage = true) {
    if (localStorage) {
      window.localStorage.setItem(`mutable_${mutable}`, value);
    } else {
      this.mutable[mutable] = value;
    }

    if (this.usingMutable[mutable]) {
      let tmpArr = this.usingMutable[mutable];

      this.usingMutable[mutable] = [];

      tmpArr.forEach(item => {
        let old_ = document.getElementById(item.pureId);

        let new_ = document.createRange().createContextualFragment(
          this[item.id](item.elements, {
            identifier: item.identifier,
          }).code
        );

        this.replace(new_, old_);
      });
    }
  }

  /**
   * Gets the value of passed winnetou mutable
   * @param {string} mutable string that represents a winnetou mutable
   * @returns {string} value or null if not exists
   */
  getMutable(mutable) {
    let local_mutable =
      window.localStorage.getItem(`mutable_${mutable}`) || null;
    if (!local_mutable) local_mutable = this.mutable[mutable] || null;
    return local_mutable;
  }

  /**
   * Method to replace a constructo
   * @param {Element|DocumentFragment} new_ DOM Element
   * @param {Element|DocumentFragment} old_ DOM Element
   */
  replace(new_, old_) {
    if (old_ && old_.parentNode) {
      let ele_ = old_.parentNode;
      ele_.replaceChild(new_, old_);
    }
  }

  /**
   * Select the indicated element
   * @param {string} selector html element. A tag, id ou class.
   */
  select(selector = "") {
    var el;

    const obj = {
      /**
       * @param {string} selector
       */
      getEl(selector) {
        if (el) return el;
        else {
          //
          if (selector.includes(" ")) {
            return document.querySelectorAll(selector);
          }
          //
          else if (selector.includes("#")) {
            selector = selector.replace("#", "");
            return [document.getElementById(selector)];
          }
          //
          else if (selector.includes(".")) {
            selector = selector.replace(".", "");
            return Array.from(
              document.getElementsByClassName(selector)
            );
          }
          //
          else {
            if (selector.includes("-win-")) {
              selector = selector.replace("#", "");
              return [document.getElementById(selector)];
            }

            return Array.from(
              document.getElementsByTagName(selector)
            );
          }
        }
      },
      remove() {
        el.forEach(item => {
          item.remove();
        });
        return this;
      },

      html(texto) {
        el.forEach(item => {
          item.innerHTML = texto;
        });
        return this;
      },
      getHtml() {
        return el[0].innerHTML;
      },
      getText() {
        return el[0].textContent;
      },
      append(texto) {
        // el.innerHTML = texto + el.innerHTML;
        el.forEach(item => {
          item.innerHTML += texto;
        });
        return this;
      },
      prepend(texto) {
        // el.innerHTML = texto + el.innerHTML;
        el.forEach(item => {
          item.innerHTML = texto + item.innerHTML;
        });
        return this;
      },
      /**
       * @param {string | number} property
       * @param {string | number} value
       */
      css(property, value) {
        el.forEach(item => {
          try {
            // @ts-ignore
            if (typeof value == "number") value += "px";
            item.style[property] = value;
          } catch (e) {}
        });
        return this;
      },
      toggleClass(classe) {
        el.forEach(item => {
          item.classList.toggle(classe);
        });
        return this;
      },
      addClass(classe) {
        el.forEach(item => {
          item.classList.add(classe);
        });
        return this;
      },
      removeClass(classe) {
        el.forEach(item => {
          item.classList.remove(classe);
        });
        return this;
      },
      hide() {
        el.forEach(item => {
          item.classList.add("winnetou_display_none");
        });
        return this;
      },
      show() {
        el.forEach(item => {
          item.classList.remove("winnetou_display_none");

          if (getComputedStyle(item).display == "none") {
            item.style.display = "initial";
          }
        });
        return this;
      },
      getWidth() {
        return el[0].getBoundingClientRect().width;
      },
      getHeight() {
        return el[0].getBoundingClientRect().height;
      },
      getLeft() {
        return el[0].offsetLeft;
      },
      getTop() {
        return el[0].offsetTop;
      },
      getGlobalPosition() {
        return el[0].getBoundingClientRect();
      },
      getVal() {
        return el[0].value;
      },
      setVal(value) {
        el.forEach(item => {
          item.value = value;
          if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            item.dispatchEvent(evt);
          } else item.fireEvent("onchange");
        });
        return this;
      },
      setAttr(attr, value) {
        el.forEach(item => {
          item.setAttribute(attr, value);
        });
        return this;
      },
      getAttr(attr) {
        return el[0].getAttribute(attr);
      },
      isChecked() {
        return el[0].checked;
      },
      getFile() {
        return el[0].files[0];
      },
    };

    el = obj.getEl(selector);

    return obj;
  }
}
