import { W } from "./winnetouv2.js";

let a = W.simpleDiv({
  titulo: "sou um titulo",
  texto: "sou um texto",
});

console.log(a);

let b = W.simpleDiv(
  {
    titulo: "sou um titulo 2",
    texto: "sou um texto",
  },
  {
    identifier: "divLogin",
  }
);

console.log(b);
