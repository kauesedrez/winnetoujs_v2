import { Winnetou as W, Constructos as C } from "../winnetou.js";
import routes from "./routes.js";
// Sempre use a extensão .js para evitar erros

routes();
W.lang(() => W.navigate("/"));
