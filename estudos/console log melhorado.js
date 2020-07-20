//robotjs.io/docs/syntax#keys
//github.com/progrape/node-localdb

/*

  Criar o build com pkg:

  pkg package.json

  e colocar junto com o output o robotjs.node pois é o compilado 

  TENHO QUE RODAR O PROJETO CRU NO WINDOWS TAMBÉM 
  PARA PODER GERAR UM ROBOTJS.NODE VALIDO PARA WINDOWS

  BEM PROVAVEL QUE EU VA PRECISAR DISSO PARA MACOS TAMBEM

  o rebuild do robotjs no windows fica em 
  firekeys/node_modules/robotjs/build/Release/robotjs.node

  colocar este binario junto com o release na pasta 

*/

/**
 * eh o problema do layout do teclado. teclado br
 * tem esse problema..
 * https://bugs.launchpad.net/ubuntu/+source/meta-gnome3/+bug/1777708
 * estudar o workaround
 * atualizar para o 20 para ver se o problema persiste

 sim o problema persiste,  a  unica forma de resolver é indo até 
 /usr/share/X11/xkb/symbols

 e editar no nano br

 comentar a linha
 // modifier_map Mod3   {Scroll_Lock};

 e reiniciar o sistema
 */

/**
 * Para resolver o problema do robot
 * não respeitar o delay definido
 * fazer essa configuração
 * https://github.com/octalmage/robotjs/commit/eee4ec5a15569c3ee50d983b7c9206d2ef2df907
 *
 * e depois usar npm rebuild
 */

var path = require("path");
var express = require("express");
var ejs = require("ejs");
var app = express();
app.use(express.static(path.join(__dirname, "_public")));
app.use(express.static(path.join(__dirname, "_views")));

var figlet = require("figlet");
const chalk = require("chalk");

var ip = require("ip");
const open = require("open");

app.use(
  "/localdb",
  express.static(path.join(path.dirname(process.execPath), "/localdb"))
);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/_views"));
app.set("view engine", "ejs");
app.set("port", 3601);

var robot = require("robotjs");

robot.setKeyboardDelay(1);

var server = app.listen(app.get("port"));
const io = require("socket.io")(server);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var exec = require("child_process").exec;

// ---------------------------------------------------
// SOCKET.IO

io.on("connection", socket => {
  socket.on("fire", data => {
    // console.log("fired", data);

    /*

    OK, AGORA ESTÁ CHEGANDO TODA A TAG SCRIPT NO BACKEND
    O PODER É ILIMITADO

    */

    let script = JSON.parse(data);
    let keys = script[0].VALUE;
    let release = [];

    for (let key in keys) {
      // console.log(keys[key]);
      robot.keyToggle(keys[key], "down");
      release.push(keys[key]);
    }

    release.forEach(comando => {
      robot.keyToggle(comando, "up");
    });

    // return;

    // let comandos = data.split(",");
    // let release = [];

    // for (let i = 0; i < comandos.length; i += 2) {
    //   switch (comandos[i]) {
    //     case "down":
    //       robot.keyToggle(comandos[i + 1], "down");
    //       release.push(comandos[i + 1]);
    //       break;

    //     case "tap":
    //       robot.keyTap(comandos[i + 1]);
    //       break;

    //     case "string":
    //       robot.typeString(comandos[i + 1]);
    //       break;
    //   }
    // }

    // release.forEach((comando) => {
    //   robot.keyToggle(comando, "up");
    // });
  });
});

// ---------------------------------------------------

console.clear();

figlet("FireKeys", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.whiteBright(data));
  console.log("\n\n");
  printMenu();
});

// open(`http://${ip.address()}:3601`);

function printMenu() {
  console.log(chalk.greenBright(`Opened in http://${ip.address()}:3601`));

  console.log(
    chalk.greenBright(
      `Database: ${path.join(path.dirname(process.execPath), "/localdb")}`
    )
  );

  console.log("\n\n");

  rl.question("Press key to exit.", function (key) {
    rl.close();
  });

  rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
  });
}

// ---------------------------------------------------

var localdb = require("node-localdb-modern");

var db = [];
// db["fires"] = localdb(
//   path.join(
//     path.dirname(process.execPath),
//     "/localdb/fires.json"
//   )
// );
// db["bg"] = localdb(
//   path.join(
//     path.dirname(process.execPath),
//     "/localdb/bg.json"
//   )
// );

// console.log(
//   path.join(
//     path.dirname(process.execPath),
//     "/localdb/bg.json"
//   )
// );

// agora está acessível via db.fires

// ---------------------------------------------------
// nova versão
// ---------------------------------------------------

require("./_controller/config.js")(app);
require("./_controller/client.js")(app);
// ---------------------------------------------------

app.get("/linha-de-comando", (request, response) => {
  exec("google-chrome google.com", (error, stdout, stderr) => {});

  response.json("ok");
});

app.get("/sh", (request, response) => {
  exec("./google.sh", (error, stdout, stderr) => {});

  response.json("ok");
});

app.get("/lock", (request, response) => {
  exec("xdg-screensaver lock", (error, stdout, stderr) => {});

  response.json("ok");
});

app.post("/salvarFire", (request, response) => {
  // console.log(request.body);
  const { nome, cor, categoria, arrComandos } = request.body;

  // agora tem que salvar o fire no banco de dados

  db.fires
    .insert({
      nome,
      cor,
      categoria,
      arrComandos,
    })
    .then(res => {
      // console.log("Fire salvo com sucesso", res);
    });

  response.json("ok");
});

app.post("/salvarbg", (request, response) => {
  const bg = request.body.bg;
  db.bg.remove({});
  db.bg
    .insert({
      bg: bg,
    })
    .then(res => {
      // console.log("bg salvo com sucesso");
      response.json("ok");
    });
});

app.get("/getBg", (request, response) => {
  db.bg.find({}).then(res => {
    let bg = res[0].bg;

    // console.log(bg, res);

    response.json(bg);
  });
});

app.post("/deleteFire", (request, response) => {
  // console.log("Chamou o delete", request.body._id);

  db.fires.remove({ _id: request.body._id }).then(function (u) {
    response.json("ok");
  });
});

app.get("/fires", (request, response) => {
  db.fires.find({}).then(res => {
    // console.log(res);
    response.json(res);
  });
});

app.get("/fires/categoria/:nome", (request, response) => {
  db.fires.find({ categoria: request.params.nome }).then(res => {
    // console.log(res);
    response.json(res);
  });
});

app.get("/fire/:id", (request, response) => {
  db.fires.findOne({ _id: request.params.id }).then(res => {
    // console.log(res);
    response.json(res);
  });
});

app.get("/:action1", (request, response) => {
  response.render("client", {
    action1: request.params.action1,
    action2: false,
    action3: false,
  });
});

app.get("/:action1/:action2", (request, response) => {
  response.render("client", {
    action1: request.params.action1,
    action2: request.params.action2,
    action3: false,
  });
});
