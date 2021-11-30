import { Project, Task } from ".prisma/client";
//TODO: change taskId to unique instance
// export interface Task {
//   taskId: number;
//   description: string;
//   priority: number;
//   project: Project;
// }

// export interface Project {
//   projectID: number;
//   description?: string;
//   priority: number;
//   tasks: Task[];
// }

export abstract class DbService {
  abstract getProject(projectID: number): Promise<Project | null>;
  abstract getProjects(): Promise<Project[] | null>;
  abstract postProject(project: Project): void;
  abstract getTask(taskId: number, projectID?: number): Promise<Task | null>;
  abstract getTasks(projectID: number): Promise<Task[]>;
  abstract postTask(task: Task): void;
}
