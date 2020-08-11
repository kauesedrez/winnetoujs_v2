import { Constructos, Winnetou } from "../winnetou.js";

let div = Constructos.divSimples({ texto: "Olá Ícones" }).create(
  "#app",
  {
    clear: true,
  }
);

/**
 * Todo:
 * options tem que ser opcional
 */
Constructos.coloredIcons_tropical().create("#app");

console.log(div.ids.divSimples);
