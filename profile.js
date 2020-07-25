import { W } from "./winnetou.js";

export default function profile(cor) {
  let profile = W.profile({
    nome: "Winnetou Kaue " + cor,
    descri: "Software developer | Cedros Development CEO",
  });

  W.create(profile.code, "#app", { clear: true });
}
