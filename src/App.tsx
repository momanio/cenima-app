import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Movies = React.lazy(() => import("./pages/Movies"));
const Series = React.lazy(() => import("./pages/Series"));
const TvSeriesDetails = React.lazy(() => import("./pages/TvSeriesDetails"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const Contact = React.lazy(() => import("./pages/Contact"));
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Navbar />

        <Suspense fallback={<div>Loading content...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/series/:seriesId" element={<TvSeriesDetails />} />
            <Route path="/movies/:moviesId" element={<MovieDetails />} />
          </Routes>{" "}
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
