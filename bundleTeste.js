import { W } from "./winnetou.js";
// Sempre use a extensão .js para evitar erros

let appTexto = W.testeMutables({
  titulo: {
    mutable: "texto",
  },
  texto: "escreva aqui",
  action: "saveMutable()",
});

W.create(appTexto.code, "#app");

// vai retornar o appTexto.code;

// let appTexto = W.testeMutables({
//   titulo: "App Texto",
//   texto: W.getMutable("texto") || "",
//   action: "saveMutable()",
// });

// W.create(appTexto.code, "#app");

// @ts-ignore
window.saveMutable = function saveMutable() {
  // @ts-ignore
  let texto = document.getElementById(appTexto.ids.text).value;

  W.setMutable("texto", texto);

  console.log("salvo com sucesso");
};
