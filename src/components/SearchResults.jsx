import { useEffect, useState } from "react"

export default function SearchResults({ query }) {
  const [results, setResults] = useState([])

useEffect(() => {
  if (!query || query.length === 0) {
    // Non fare setState dentro l’effetto → lo facciamo fuori
    return
  }

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=e5235493&s=${query}`
      )
      const data = await response.json()

      if (data.Search) {
        const valid = data.Search.filter(
          movie => movie.Poster && movie.Poster !== "N/A"
        )
        setResults(valid.slice(0, 10))
      } else {
        setResults([])
      }
    } catch (err) {
      console.log("Errore nella ricerca:", err)
    }
  }

  fetchMovies()
}, [query])

// 👇 sposto qui il reset
if (!query || query.length === 0) {
  if (results.length > 0) setResults([])  
}

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
