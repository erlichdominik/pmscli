import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { DbService, Project, Task } from "../DbService";

//TODO: change structure of json db to {
// projects: [
//     project-name: {
//   projectId: unique
//   tasks: [list of tasks]
// }
//]
//}

export class JsDbApi extends DbService {
  private static instance: JsDbApi;
  private _db = new JsonDB(new Config("nodedb", true, true, "/"));

  public static getInstance(): JsDbApi {
    if (!JsDbApi.instance) {
      JsDbApi.instance = new JsDbApi();
    }
    return JsDbApi.instance;
  }

  getProject(projectID: number): Project {
    return this._db.getObject<Project>(`/project[${projectID}]`);
  }
  getProjects(): Project[] {
    return this._db.getObject<Project[]>("/project[]");
  }
  postProject(project: Project): void {
    this._db.push("/project[]", project, true);
  }
  getTask(taskId: number, projectID?: number): Task {
    return projectID === undefined
      ? this._db.getObject<Task>(`/${taskId}`)
      : this._db.getObject<Task>(`/${projectID}/${taskId}`);
  }
  getTasks(): Task[] {
    throw new Error("Method not implemented.");
  }
  postTask(task: Task): void {
    throw new Error("Method not implemented.");
  }

  //   getTasks(): Task[] {
  //     return this._db.getObject<Task[]>("/tasks");
  //   }

  //   postTask(task: Task): void {
  //     this._db.push(`/tasks/${task.taskId}`, task);
  //   }
}
