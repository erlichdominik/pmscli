import { Command, flags } from "@oclif/command";
import inquirer = require("inquirer");
import { Task } from "../services/DbService";
import { JsDbApi } from "../services/json-db-api/js-db-api";

export default class Add extends Command {
  static description = "describe the command here";
  // get instance of dbService
  private _dbService: JsDbApi = JsDbApi.getInstance();

  static flags = {
    help: flags.help({ char: "h" }),
    option: flags.string({
      char: "o",
      description: "type of adding element",
      options: ["task", "project"],
    }),
  };

  // static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Add);
    let optionFlag = flags.option;
    // check if user provide any option with flag
    if (!optionFlag) {
      let response = await inquirer.prompt([this.getOptionQuestion()]);
      optionFlag = response.option;
    }
    // if user wants to add task, check if we have any project
  }

  private getTaskDataQuestions() {
    return [
      {
        name: "name",
        message: "provide name",
        type: "input",
      },
      {
        name: "description",
        message: "provide description",
        type: "input",
      },
      {
        name: "priority",
        message: "provide priority",
        type: "list",
        choices: [
          { name: "1" },
          { name: "2" },
          { name: "3" },
          { name: "4" },
          { name: "5" },
        ],
      },
    ];
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
