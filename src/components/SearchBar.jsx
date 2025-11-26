export default function SearchBar({ query, setQuery }) {
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="bg-black p-3 border-bottom border-secondary">
      <input
        type="text"
        className="form-control bg-dark text-white"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}
