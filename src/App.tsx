import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const Movies = React.lazy(() => import("./pages/Movies"));
const Series = React.lazy(() => import("./pages/Series"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const TvSeriesDetails = React.lazy(() => import("./pages/TvSeriesDetails"));
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />

        <Suspense fallback={<div>Loading content...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/series/:seriesId" element={<TvSeriesDetails />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
