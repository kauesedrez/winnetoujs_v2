import { Winnetou, Constructos, Strings } from "../winnetou.js";
import {
  screenScroll,
  slideScreen,
} from "../node_modules/win-slidescreen/src/slideScreen.js";

import { animate } from "../node_modules/win-animate/src/animate.js";
// import { animate } from "win-animate";

/**
 * Registro as classes e os métodos que vou usar via onclick.
 *
 * Todo:
 * Onde está o problema nisso?
 * Se cada função que eu for chamar via onclick nos constructos
 * vou ter que declarar global assim na window.
 * Que mão e que feio. Improdutivo!
 *
 * Como resolver? Quais as opções?
 * Porque eu vou usar muito funções no onclick do constructo,
 * eu praticamente não vou usar o eventlistener do click
 * e cada uma dessas funções terá que ser declarada na window.
 *
 * Não vejo solução a curto prazo.
 *
 */
//@ts-ignore
window.Winnetou = Winnetou;
// @ts-ignore
window.screenScroll = screenScroll;

/**
 * Cria o container do slidescreen e
 * adiciona ao app
 */
let ss = Constructos.slideScreen();
Winnetou.create(ss.code, "#app");

/**
 * Cria as telas (screens) e adiciona ao container
 *
 * Todo:
 * Esse negócio de ter que colocar o hashtag
 * antes do id tá muito porco, tenho que pensar em uma solução
 */
let tela1 = Constructos.screen();
let tela2 = Constructos.screen();
// implementado create sem #
// testar
// se funcionar fazer o mesmo no select
// [ok] funcionou
Winnetou.create(tela1.code + tela2.code, ss.ids.slideScreen);

/**
 * Inicializa o slidescreen
 *
 * Todo:
 * Esses nomes 'slideScreen' e 'screenScroll' estão muito
 * bizarros e complicados, repensar o nome
 * [ok] estão certíssimos os nomes!
 */
slideScreen(ss.ids.slideScreen, "#app");

/**
 * Adiciona conteúdo às telas
 */
let bt = Constructos.btSimples({
  text: "Sou a tela 1",
  action: `Winnetou.navigate('/pagina2')`,
});

let div = Constructos.simpleDiv({ texto: "Olá mundo" });

Winnetou.create(bt.code + div.code, tela1.ids.screen);

animate(div.ids.simpleDiv, "bounce");

// adiciona à tela 2
Winnetou.select(tela1.ids.screen).css("backgroundColor", "red");
let bt2 = Constructos.btSimples({
  text: "Sou a tela 2",
  action: `Winnetou.navigate('/')`,
});
Winnetou.create(bt2.code, "#" + tela2.ids.screen);

Winnetou.createRoutes({
  "/": () => {
    screenScroll(tela1.ids.screen);
  },
  "/pagina2": () => {
    screenScroll(tela2.ids.screen);
  },
});
