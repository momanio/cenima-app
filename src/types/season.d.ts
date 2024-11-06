import { Episode } from "./episode";

export interface Season {
  id: number;
  name: string;
  season_number: number;
  episode_count: number;
  air_date: string;
  episodes: Episode[];
}
