import { useEffect, useState, useRef } from "react"

export default function MovieGallery() {
  
  const [avengers, setAvengers] = useState([])
  const [harry, setHarry] = useState([])
  const [starwars, setStarwars] = useState([])

  // SCROLL
  const refAvengers = useRef(null)
  const refHarry = useRef(null)
  const refStarwars = useRef(null)

  // FUNZIONE FETCH
  const fetchMovies = async (searchTerm, setter) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=e5235493&s=${searchTerm}`
      )
      const data = await res.json()

      if (data.Search) {
        const validMovies = data.Search.filter(
          (m) => m.Poster && m.Poster !== "N/A"
        )
        setter(validMovies)
      } else {
        setter([])
      }
    } catch (error) {
      console.log("Errore fetch:", error)
      setter([])
    }
  }

  // FETCH DI CARICMENTO
  useEffect(() => {
    fetchMovies("Avengers", setAvengers)
    fetchMovies("Harry Potter", setHarry)
    fetchMovies("Star Wars", setStarwars)
  }, [])

  // FUNZIONI PER SCROLLARE 
  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -400, behavior: "smooth" })
  }

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 400, behavior: "smooth" })
  }

  // RENDER DI UNA RIGA
  const renderRow = (title, movies, ref) => (
    <section className="mb-4 position-relative">
      {/* TITOLO + FRECCE */}
      <div className="d-flex justify-content-between align-items-center mb-2 px-2">
        <h3 className="h5 m-0">{title}</h3>

        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => scrollLeft(ref)}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => scrollRight(ref)}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* GALLERIA FILM */}
      <div
        ref={ref}
        className="hide-scrollbar"
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "scroll",
          paddingBottom: "10px",
        }}
      >
        {movies.map((movie, i) => (
          <img
            key={movie.imdbID + "-" + i}
            src={movie.Poster}
            alt={movie.Title}
            onError={(e) => (e.target.style.display = "none")}
            style={{
              height: "180px",
              borderRadius: "6px",
              flexShrink: 0,
              objectFit: "cover",
              transition: "transform 0.2s",
            }}
            className="movie-card"
          />
        ))}
      </div>
    </section>
  )

  return (
    <main className="container-fluid px-3 px-md-4 py-3 text-white">
      {renderRow("Avengers", avengers, refAvengers)}
      {renderRow("Harry Potter", harry, refHarry)}
      {renderRow("Star Wars", starwars, refStarwars)}
    </main>
  )
}
