import Categoria from "./file3";

class Produto extends Categoria {
  constructor(produto, categoria) {
    super(categoria);
    this.produto = produto;
  }

  visualizar() {
    console.log(`${this.produto} é da categoria ${this.categoria}`);
  }
}

export default Produto;
