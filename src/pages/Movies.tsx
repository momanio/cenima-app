import { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getPopularMovies();
      console.log("Fetched Movies Data:", moviesData);
      setMovies(moviesData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
