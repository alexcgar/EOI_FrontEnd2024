import { Team } from "./team";

export interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
}
