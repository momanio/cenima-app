import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/home";
import { Movies } from "../components/movies";
import { Series } from "../components/series";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/series",

    element: <Series />,
  },
]);
