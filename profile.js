import { W } from "./winnetou.js";

export default function profile() {
  let profile = W.profile({
    nome: "Winnetou Kaue",
    descri: "Software developer | Cedros Development CEO",
  });

  W.create(profile.code, "#app", { clear: true });
}
