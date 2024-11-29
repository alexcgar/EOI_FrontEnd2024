import { Http } from "./http.js";

export class TareasService {
    #http = new Http();
    #urlTareas = "http://localhost:3000/tasks";
  
    async getTareas() {
      const resp = await this.#http.get(this.#urlTareas);
      return resp.tasks;
    }
  
    async insertTarea(tarea) {
      const resp = await this.#http.post(this.#urlTareas, tarea);
      return resp.task;
    }
  
    async deleteTarea(id) {
      await this.#http.delete(`${this.#urlTareas}/${id}`);
    }
  }