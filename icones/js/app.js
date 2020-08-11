import { Constructos, Winnetou } from "../winnetou.js";

let div = Constructos.divSimples({ texto: "Olá Ícones" }).create(
  "#app",
  {
    clear: true,
  }
);

console.log(div.ids.divSimples);
