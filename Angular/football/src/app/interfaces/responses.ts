import { Competition } from "./competition";
import { Match } from "./match";

export interface CompetitionsResponse {
  competitions: Competition[];
}

export interface MatchesResponse {
  matches: Match[];
}
