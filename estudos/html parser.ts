// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
// import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { parse } from "node-html-parser";

export class NodeDependenciesProvider implements vscode.TreeDataProvider<Dependency> {
  private workspaceRoot: string;

  private _onDidChangeTreeData: vscode.EventEmitter<
    Dependency | undefined
  > = new vscode.EventEmitter<Dependency | undefined>();

  readonly onDidChangeTreeData: vscode.Event<Dependency | undefined> = this
    ._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  constructor() {
    this.workspaceRoot = vscode.workspace.rootPath || "";
  }

  getTreeItem(element: Dependency): vscode.TreeItem {
    return element;
  }

  getChildren(element?: Dependency): Thenable<Dependency[]> {
    if (element) {
      // console.log(element.label);
      // [
      //   new Dependency(
      //     "teste",
      //     "teste" + element.label,
      //     vscode.TreeItemCollapsibleState.None
      //   ),
      // ];

      return Promise.resolve(this.getConstructos(element));
    } else {
      return Promise.resolve(this.getFiles());
    }
  }
  getConstructos(element: Dependency): Dependency[] {
    /**
     * Todo:
     * --> fazer os constructos trazerem a lista de elementos e ids internos
     * --> ter recorrencia de folders
     * --> poder alterar a pasta padrão dos constructos lendo o arquivo winConfig.json
     * --> try catch em tudo para não ter falhas
     * ==> Ao clicar no constructo inserir um W.create() no documento? Seria top.
     *
     */
    let constructosPath = path.join(
      this.workspaceRoot,
      "constructos",
      element.description
    );

    let content = fs.readFileSync(constructosPath, "utf-8");

    let contentHtml = parse(content);

    let Componentes = contentHtml.querySelectorAll(".winnetou");

    let retorno: Dependency[] = [];

    // console.log(Componentes);

    Array.from(Componentes).forEach((componente: any) => {
      let id = componente.innerHTML.match(/\[\[\s?(.*?)\s?\]\]/)[1];
      retorno.push(new Dependency(id, "", vscode.TreeItemCollapsibleState.None));
    });

    return retorno;

    // agora content possui o html do contructo.html
  }

  getFiles(): Dependency[] {
    /**
     * Tem que ler o folder dos constructos e
     * retornar uma array com os nomes dos arquivos html
     * ----
     * Todo:
     * Agora tem que ler os constructos e retornar o nome dos constructos
     * aninhados nos arquivos html
     */

    let constructosPath = path.join(this.workspaceRoot, "constructos");
    let retorno: Dependency[] = [];
    if (this.pathExists(constructosPath)) {
      vscode.window.showInformationMessage("constructos folder ok");

      let files = fs.readdirSync(constructosPath);

      files.forEach(constructo => {
        retorno.push(
          new Dependency(
            path.parse(constructo).name.toUpperCase(),
            constructo,
            vscode.TreeItemCollapsibleState.Collapsed
          )
        );
      });

      console.log(retorno);

      return retorno;
    } else {
      vscode.window.showInformationMessage("Workspace has no constructos folder");
      return [];
    }
  }

  private pathExists(p: string): boolean {
    try {
      fs.accessSync(p);
    } catch (err) {
      return false;
    }
    return true;
  }
}

class Dependency extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private version: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }

  get tooltip(): string {
    //é o mesmo que o this.tooltip
    /**
     * Em um objeto javascript é
     * var Dependency = {
     *  tootip: `${this.label}-${this.version}`
     * }
     *
     * o typescript tenta transformar o javascript em c# ¬¬
     * A Microsoft não aceita ter perdido para o javascript,
     * ela sempre odiou o javascript.
     */
    return `${this.label}-${this.version} kaue`;
  }

  get description(): string {
    return this.version;
  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "testewinnetouts" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("extension.helloWorld", () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World 2!");
  });

  context.subscriptions.push(disposable);

  const nodeDependenciesProvider = new NodeDependenciesProvider();

  vscode.window.registerTreeDataProvider("nodeDependencies", nodeDependenciesProvider);

  vscode.commands.registerCommand("nodeDependencies.refreshEntry", () =>
    nodeDependenciesProvider.refresh()
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
