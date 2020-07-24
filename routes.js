import { W } from "./winnetou.js";
import render from "./render.js";

export default function routes() {
  W.createRoutes({
    "/": render,
  });
}
