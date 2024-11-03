import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../services/moviesService";

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getPopularMovies();
      setMovies(fetchedMovies);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
            />
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
