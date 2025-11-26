import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchResults({ query }) {
  // questo componente ha UNA responsabilità:
  // mostrare i risultati della ricerca del film

  const [results, setResults] = useState([])
  const navigate = useNavigate()

  // funzione dedicata alla fetch (una funzione = una cosa sola)
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=e5235493&s=${query}`
      )
      const data = await response.json()

      if (data.Search) {
        const validMovies = data.Search.filter(
          (movie) => movie.Poster && movie.Poster !== "N/A"
        )

        // massimo 10 risultati
        setResults(validMovies.slice(0, 10))
      } else {
        setResults([])
      }
    } catch (err) {
      console.log("Errore nella ricerca:", err)
    }
  }

  // eseguo la fetch solo quando query cambia
  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <div className="bg-black px-3 py-3 border-bottom border-secondary">
      <h5 className="text-white mb-3">Search Results</h5>

      <div className="row g-2">
        {results.map((movie, i) => (
          <div key={movie.imdbID + "-" + i} className="col-4 col-sm-3 col-md-2">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="img-fluid rounded-2"
              onError={(e) => (e.target.style.display = "none")}
              onClick={() => navigate("/movie-details/" + movie.imdbID)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}

        {results.length === 0 && (
          <p className="text-secondary m-0">
            No results found for <strong>{query}</strong>
          </p>
        )}
      </div>
    </div>
  )
}
