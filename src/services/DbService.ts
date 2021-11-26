//TODO: change taskId to unique instance
export interface Task {
  TaskId: number;
  description: string;
  priority: number;
}

export abstract class DbService {
  abstract getTasks(): Task[];
  abstract postTask(task: Task): void;
}
