import React, { useEffect, useState } from "react";
import { getPopularMovies, getPopularShows } from "../services/api";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/movie";
import { Series } from "../types/series";
import SeriesCard from "../components/SeriesCard";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [Shows, setShows] = useState<Series[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getPopularMovies();
      const ShowsData = await getPopularShows();
      console.log("Fetched TV Shows Data:", ShowsData);
      console.log("Fetched Movies Data:", moviesData);
      setMovies(moviesData);
      setShows(ShowsData);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <h2>Popular Movies</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h2>Popular TV Shows</h2>
      {
        <div className="tvshows-grid">
          {Shows.filter(
            (Show) => Show.poster_path && Show.name && Show.overview
          ).map((Show) => (
            <SeriesCard key={Show.id} series={Show} />
          ))}
        </div>
      }
    </div>
  );
};
export default Home;
