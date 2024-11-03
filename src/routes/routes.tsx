import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/home";
import { MovieList } from "../components/MovieList";
import { SeriesList } from "../components/SeriesList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <MovieList />,
  },
  {
    path: "/series",

    element: <SeriesList />,
  },
]);
