import { Winnetou as W, Constructos as C } from "../winnetou.js";
import { screenScroll, slideScreen } from "./slideScreen.js";

export default function app() {
  // @ts-ignore
  window.screenScroll = screenScroll;
  let container = W.slideScreen();
  W.create(container.code, "#app");

  let screen1 = W.screen();
  W.create(screen1.code, "#" + container.ids.slideScreen);

  let screen2 = W.screen();
  W.create(screen2.code, "#" + container.ids.slideScreen);

  let screen3 = W.screen();
  W.create(screen3.code, "#" + container.ids.slideScreen);

  slideScreen(container.ids.slideScreen, "#app");

  pagina1(screen1.ids.screen, screen2.ids.screen);
  C.simpleDiv({ texto: "eureca!!!" }).code;
}

function pagina1(out, screen2) {
  W.create(
    W.btSimples({
      text: "Ola slidescreen",
      action: `screenScroll('${screen2}')`,
    }).code,
    "#" + out
  );
}
