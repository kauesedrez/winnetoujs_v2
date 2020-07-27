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

export function guestProfile(nome) {
  let profile = W.profile({
    nome,
    descri: "Profile de " + nome,
  });

  W.create(profile.code, "#app", { clear: true });
}

export function notFound() {
  let profile = W.profile({
    nome: "404 not found",
    descri: "Lost in space",
  });

  W.create(profile.code, "#app", { clear: true });
}
