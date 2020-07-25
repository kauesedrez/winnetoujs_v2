/**
 *
 */
class Teste {
  constructor() {
    this.teste = "oi";
  }
  ola() {
    console.log("ola");
  }
}

const T = new Teste();

Teste.prototype.welcome = () => {
  console.log("bem vindo");
};

T.welcome();
