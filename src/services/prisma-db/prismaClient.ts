import { PrismaClient, Project, Task } from ".prisma/client";
import { DbService } from "../DbService";

class PrismaDb extends DbService {
  private prisma = new PrismaClient();
  async getProject(projectID: number): Promise<Project | null> {
    const project = await this.prisma.project.findUnique({
      where: {
        id: projectID,
      },
      include: {
        Tasks: true,
      },
    });
    return project;
  }
  async getProjects(): Promise<Project[]> {
    const projects: Project[] = await this.prisma.project.findMany();
    return projects;
  }
  postProject(project: Project): void {
    throw new Error("Method not implemented.");
  }
  getTask(taskId: number, projectID?: number): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  getTasks(projectID: number): Promise<Task[]> {
    throw new Error("Method not implemented.");
  }
  postTask(task: Task): void {
    throw new Error("Method not implemented.");
  }
}
