import { W } from "./winnetou.js";

export default function render() {
  let post = W.post({
    actionMyProfile: "W.navigate('/profile')",
    actionProfile:
      "W.navigate('/profile/Winnetou/post21/comment100/likes300')",
    nome: "Kaue",
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
