import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types/movie";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery<Movie[], Error>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching movies: {error.message}</div>;
  }

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movies-grid">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
