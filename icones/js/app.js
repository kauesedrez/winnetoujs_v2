import { Constructos, Winnetou } from "../winnetou.js";

let div1 = Constructos.divSimples({ texto: "Olá Ícones" });

Winnetou.create(div1.code, "#app");

// ícone simples
Winnetou.create(Constructos.icons_delete().code, "#app");

// ícone dual tone
Winnetou.create(
  Constructos.icons_compass({ class: "dualTone" }).code,
  "#app"
);

// ícone colorido
Winnetou.create(Constructos.coloredIcons_camera().code, "#app");

// ícone colorido
Winnetou.create(Constructos.coloredIcons_tropical().code, "#app");

// ícone colorido colocado na pasta de ícones normais
// [!] NÃO FAÇA ISSO
Winnetou.create(Constructos.icons_tropical().code, "#app");
