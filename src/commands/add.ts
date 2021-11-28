import { Command, flags } from "@oclif/command";
import inquirer = require("inquirer");
import { Task } from "../services/DbService";
import { JsDbApi } from "../services/json-db-api/js-db-api";

export default class Add extends Command {
  static description = "describe the command here";
  private _dbService: JsDbApi = JsDbApi.getInstance();

  static flags = {
    help: flags.help({ char: "h" }),
    option: flags.string({
      char: "o",
      description: "type of adding element",
      options: ["task", "project"],
    }),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
  };

  // static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Add);
    let optionFlag = flags.option;
    if (!optionFlag) {
      let response = await inquirer.prompt([this.getOptionQuestion()]);
      optionFlag = response.option;
    }
    // const testObject: Task = {
    //   TaskId: 2,
    //   description: "some other test description",
    //   priority: 2,
    // };
    // this._dbService.postTask(testObject);
    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from /Users/dominikerlich/Programming/pmscli/src/commands/add.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
  private getOptionQuestion() {
    let response = {
      name: "option",
      message: "provide what you want to add",
      type: "list",
      choices: [{ name: "task" }, { name: "project" }],
    };
    return response;
  }
}
