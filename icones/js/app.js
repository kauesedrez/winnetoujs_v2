import { Constructos, Winnetou } from "../winnetou.js";

let div = Constructos.divSimples({ texto: "Olá Ícones" }).create(
  "#app",
  {
    clear: true,
  }
);

/**
 * todo:
 * [ok] options tem que ser opcional
 */
let icon = Constructos.coloredIcons_tropical(
  { class: "redIcon" },
  { identifier: "meuIcon" }
).create("#app", { reverse: true });

/**
 * todo:
 * [ok] Reverse não está funcionando
 * eu tenho certeza que o prependChild funcionava
 */

console.log(div.ids.divSimples, icon.ids.coloredIcons_tropical);
