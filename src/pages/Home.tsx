import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, getPopularShows } from "../services/api";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/movie";
import { Series } from "../types/series";
import SeriesCard from "../components/SeriesCard";

const Home: React.FC = () => {
  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useQuery<Movie[]>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  const {
    data: shows,
    isLoading: showsLoading,
    error: showsError,
  } = useQuery<Series[]>({
    queryKey: ["popularShows"],
    queryFn: getPopularShows,
  });

  return (
    <div className="home">
      <h2>Popular Movies</h2>
      {moviesLoading ? (
        <div>Loading movies...</div>
      ) : moviesError ? (
        <div>Error loading movies: {moviesError.message}</div>
      ) : (
        <div className="movies-grid">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <h2>Popular TV Shows</h2>
      {showsLoading ? (
        <div>Loading TV shows...</div>
      ) : showsError ? (
        <div>Error loading TV shows: {showsError.message}</div>
      ) : (
        <div className="tvshows-grid">
          {shows
            ?.filter((show) => show.poster_path && show.name && show.overview)
            .map((show) => (
              <SeriesCard key={show.id} series={show} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
