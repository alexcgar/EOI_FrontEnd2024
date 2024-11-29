import { SingleTaskResponse, TasksResponse } from "../interfaces/responses";
import { Task } from "../interfaces/task";
import { Http } from "./http";

export class TareasService {
    #http = new Http();
    #urlTareas = "http://localhost:3000/tasks";
  
    async getTareas() {
      const resp = await this.#http.get<TasksResponse>(this.#urlTareas);
      return resp.tasks;
    }
  
    async insertTarea(tarea: Task) {
      const resp = await this.#http.post<SingleTaskResponse, Task>(this.#urlTareas, tarea);
      return resp.task;
    }
  
    async deleteTarea(id: number) {
      await this.#http.delete<void>(`${this.#urlTareas}/${id}`);
    }
  }