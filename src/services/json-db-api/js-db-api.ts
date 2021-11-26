import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { DbService, Task } from "../DbService";

export class JsDbApi extends DbService {
  private static instance: JsDbApi;
  private _db = new JsonDB(new Config("nodedb", true, true, "/"));

  public static getInstance(): JsDbApi {
    if (!JsDbApi.instance) {
      JsDbApi.instance = new JsDbApi();
    }
    return JsDbApi.instance;
  }

  getTasks(): Task[] {
    return this._db.getObject<Task[]>("/tasks");
  }

  postTask(task: Task): void {
    this._db.push(`/tasks/${task.TaskId}`, task);
  }
}
