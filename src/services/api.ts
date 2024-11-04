import axios from "axios";
import { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async () => {
  const response = await axios.get(`${API_URL}/movie/popular`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

export const getPopularShows = async () => {
  const response = await axios.get(`${API_URL}/tv/popular`, {
    params: { api_key: API_KEY },
  });

  return response.data.results;
};
export async function getMovieDetails(movieId: number): Promise<Movie> {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: { api_key: API_KEY },
    }
  );
  return response.data;
}
