import {
  Winnetou as W,
  Constructos as C,
  Strings,
} from "../winnetou.js";

export default function render() {
  let post = W.post({
    actionMyProfile: "W.navigate('/profile')",
    actionProfile:
      "W.navigate('/profile/Winnetou/post21/comment100/likes300')",
    nome: Strings.welcome,
    post: "Entendendo de vez o WinnetouJs",
    comentarios: { mutable: "comentarios" },
    curtidas: { mutable: "curtidas" },
    Compartilhamentos: { mutable: "compartilhamentos" },
  });

  let notify = W.notify({
    comentarios: { mutable: "comentarios" },
    curtidas: { mutable: "curtidas" },
    Compartilhamentos: { mutable: "compartilhamentos" },
  });

  W.create(post.code, "#app", { clear: true });
  W.create(notify.code, "#app");

  W.create(
    W.btSimples({
      text: "Camila Profile",
      action: "W.navigate('/camila')",
    }).code,
    "#app"
  );

  W.create(
    W.btSimples({
      text: "Camila Amigos",
      action: "W.navigate('/camila/friends')",
    }).code,
    "#app"
  );

  // -------------------------------------------------------
  // teste eventhandler

  let btnTeste = W.btSimples({
    text: "Onclick teste",
    data: "data-user='user 001'",
  });
  W.create(btnTeste.code, "#app");

  W.on("click", ".btn", target => {
    console.log("fui clicado");
    // mudar o botão de cor
    W.select("#" + target.id).css("backgroundColor", "red");

    // pegar um attr do botão
    console.log(target.getAttribute("data-user"));

    // pegar o id do botão
    console.log(target.id);
  });

  W.on("click", ".btn", target => {
    console.log("sou o segundo bind");
  });

  W.click(".btn", e => {
    let c = parseInt(W.getMutable("comentarios") || "0");
    c++;
    W.setMutable("comentarios", c.toString());
  });
  // ----------------------------------------------------------
  // change lang
  W.create(
    W.btSimples({
      text: "PT-BR",
      action: "W.changeLang('pt-br')",
    }).code,
    "#app"
  );

  // ----------------------------------------------------------
  // temas

  // @ts-ignore
  window.light = () => {
    W.newTheme({
      "--main-bg-color": "#ddd",
      "--main-fg-color": "#333",
    });
  };

  // @ts-ignore
  window.dark = () => {
    W.newTheme({
      "--main-bg-color": "#333",
      "--main-fg-color": "#ddd",
    });
  };

  let themeConstructos =
    W.btSimples({
      text: "Light Theme",
      action: "light()",
    }).code +
    W.btSimples({
      text: "Dark Theme",
      action: "dark()",
    }).code;

  W.create(themeConstructos, "#app");

  // ----------------------------------------------------------

  //@ts-ignore
  window.comentar = () => {
    let c = parseInt(W.getMutable("comentarios") || "0");
    c++;
    W.setMutable("comentarios", c.toString());
  };

  // @ts-ignore
  window.curtir = () => {
    let c = parseInt(W.getMutable("curtidas") || "0");
    c++;
    W.setMutable("curtidas", c.toString());
  };

  // @ts-ignore
  window.compartilhar = () => {
    let c = parseInt(W.getMutable("compartilhamentos") || "0");
    c++;
    W.setMutable("compartilhamentos", c.toString());
  };

  W.select(notify.ids.notify).css("backgroundColor", "red");
}
