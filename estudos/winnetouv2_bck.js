import Constructos from "./_generatedConstructos.js";

class Winnetou extends Constructos {
  //

  constructor() {
    super();
    /** @type {array} */
    this.mutable = [];
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
    var $this = this;

    if (localStorage) {
      window.localStorage.setItem(`mutable_${mutable}`, value);
    } else {
      this.mutable[mutable] = value;
    }

    // se estiver usando mutable no localstorage nao atualiza o constructo?

    // if (this.usingMutable[mutable]) {
    //   let tmpArr = this.usingMutable[mutable];
    //   this.usingMutable[mutable] = [];

    //   tmpArr.forEach(item => {
    //     let old_ = document.getElementById(item.id);

    //     // deveria manter o mesmo id ...
    //     // como obter isso

    //     let new_ = document
    //       .createRange()
    //       .createContextualFragment(
    //         this.pull(
    //           item.constructo,
    //           item.elements,
    //           item.options,
    //           "replacestore"
    //         )
    //       );

    //     this.replace(new_, old_);
    //   });
    // }
  }

  /**
   * Gets the value of passed winnetou mutable
   * @param {string} mutable string that represents a winnetou mutable
   * @returns {string|boolean} value or false if not exists
   */
  getMutable(mutable) {
    let local_mutable =
      window.localStorage.getItem(`mutable_${mutable}`) || false;
    if (!local_mutable)
      local_mutable = this.mutable[mutable] || false;
    return local_mutable;
  }
}

export const W = new Winnetou();
