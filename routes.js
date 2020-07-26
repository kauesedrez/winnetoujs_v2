import { W } from "./winnetou.js";
import render from "./render.js";
import { likes, profile } from "./profile.js";

export default function routes() {
  W.createRoutes(
    {
      "/": render,
      "/profile/:user/:post/:comment/:likes": (
        user,
        post,
        comment,
        likes_
      ) => {
        likes(user, post, comment, likes_);
      },
      "/profile": profile,
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
