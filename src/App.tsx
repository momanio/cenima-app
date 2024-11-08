import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const Movies = React.lazy(() => import("./pages/Movies"));
const Series = React.lazy(() => import("./pages/Series"));
const TvSeriesDetails = React.lazy(() => import("./pages/TvSeriesDetails"));
import "./App.css";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900">
        <Navbar />

        <Suspense fallback={<div>Loading content...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/series/:seriesId" element={<TvSeriesDetails />} />
            <Route path="/movies/:moviesId" element={<MovieDetails />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
