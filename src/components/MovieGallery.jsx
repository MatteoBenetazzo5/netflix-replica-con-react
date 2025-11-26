import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function MovieGallery() {
  // 1) STATE: memorizza i film caricati (3 categorie)
  const [avengers, setAvengers] = useState([])
  const [harry, setHarry] = useState([])
  const [starwars, setStarwars] = useState([])

  // 2) NAVIGATE: per andare alla pagina di dettaglio
  const navigate = useNavigate()

  // 3) REFS per lo scroll orizzontale
  const refAvengers = useRef(null)
  const refHarry = useRef(null)
  const refStarwars = useRef(null)

  // 4) FETCH GENERICA
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

  // 5) CARICAMENTO INIZIALE
  useEffect(() => {
    fetchMovies("Avengers", setAvengers)
    fetchMovies("Harry Potter", setHarry)
    fetchMovies("Star Wars", setStarwars)
  }, [])

  // 6) FUNZIONI SCROLL
  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -400, behavior: "smooth" })
  }

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 400, behavior: "smooth" })
  }

  // 7) FUNZIONE PER RENDERIZZARE UNA RIGA
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
            onClick={() => navigate("/movie-details/" + movie.imdbID)}
            style={{
              height: "180px",
              borderRadius: "6px",
              flexShrink: 0,
              objectFit: "cover",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            className="movie-card"
          />
        ))}
      </div>
    </section>
  )

  // 8) RENDER DELLA PAGINA
  return (
    <main className="container-fluid px-3 px-md-4 py-3 text-white">
      <title>Home</title>
      {renderRow("Avengers", avengers, refAvengers)}
      {renderRow("Harry Potter", harry, refHarry)}
      {renderRow("Star Wars", starwars, refStarwars)}
    </main>
  )
}
