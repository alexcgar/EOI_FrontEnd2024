import { Plant } from "./plant";

export interface PlantsResponse {
  data: Plant[];
  current_page: number;
  last_page: number;
}
