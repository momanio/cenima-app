import axios from "axios";
import { Movie } from "../types/movie";
import { Series } from "../types/series";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${API_URL}/movie/popular`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    return [];
  }
};

export const getPopularShows = async (): Promise<Series[]> => {
  try {
    const response = await axios.get(`${API_URL}/tv/popular`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch popular shows:", error);
    return [];
  }
};

export const getMovieDetails = async (movieId: number): Promise<Movie> => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch movie details for ID ${movieId}:`, error);
    throw new Error("Could not fetch movie details");
  }
};

export const getShowDetails = async (showId: number): Promise<Series> => {
  try {
    const response = await axios.get(`${API_URL}/tv/${showId}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch show details for ID ${showId}:`, error);
    throw new Error("Could not fetch show details");
  }
};
