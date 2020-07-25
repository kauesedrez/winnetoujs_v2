import { W } from "./winnetou.js";
import render from "./render.js";
import profile from "./profile.js";

export default function routes() {
  W.createRoutes(
    {
      "/": render,
      "/profile/:cor": cor => {
        profile(cor);
      },
    },
    {
      onBack: () => {
        // alert("onback funcionando");
      },
      onGo: () => {
        // alert("ongo ok");
      },
    }
  );
}
