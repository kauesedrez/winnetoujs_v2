import { W } from "./winnetou.js";
import render from "./render.js";
import profile from "./profile.js";

export default function routes() {
  W.createRoutes({
    "/": render,
    profile,
  });
}
