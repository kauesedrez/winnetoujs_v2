import { Constructos, Winnetou } from "../winnetou.js";

let div1 = Constructos.divSimples({ texto: "Olá Ícones" });

Winnetou.create(div1.code, "#app");

Winnetou.create(
  Constructos.icons_delete({ class: "redIcon" }).code,
  "#app"
);
