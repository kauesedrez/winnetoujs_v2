import { W } from "./winnetou.js";

export function likes(user, post, comment, likes) {
  let profile = W.profile({
    nome: `${user} - ${post} -  ${comment}`,
    descri: `Este comentário tem ${likes}`,
  });

  W.create(profile.code, "#app", { clear: true });
}

export function profile() {
  let profile = W.profile({
    nome: "Winnetou Kaue Sedrez Bilhalva",
    descri: "Software developer | Cedros Development CEO",
  });

  W.create(profile.code, "#app", { clear: true });
}
