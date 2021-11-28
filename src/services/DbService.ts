//TODO: change taskId to unique instance
export interface Task {
  taskId: number;
  description: string;
  priority: number;
  project: Project;
}

export interface Project {
  projectID: number;
  description?: string;
  priority: number;
  tasks: Task[];
}

export abstract class DbService {
  abstract getProject(projectID: number): Project;
  abstract getProjects(): Project[];
  abstract postProject(project: Project): void;
  abstract getTask(taskId: number, projectID?: number): Task;
  abstract getTasks(projectID?: number): Task[];
  abstract postTask(task: Task): void;
}
