import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"
// PAGINE
import MovieGallery from "./components/MovieGallery"
import TVShows from "./components/TVShows"
import MovieDetails from "./components/MovieDetails"
import NotFound from "./components/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<MovieGallery />} />

        {/* TV SHOWS */}
        <Route path="/tv-shows" element={<TVShows />} />

        {/* MOVIE DETAILS */}
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />

        {/* Percorso non trovato → 404 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}
