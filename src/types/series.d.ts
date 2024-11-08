import { Genre } from "./genre";
import { Season } from "./season";

export interface Series {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  genres: Genre[];
  vote_count: number;
  seasons: Season[];
  number_of_episodes: number;
  first_air_date: string;
}
