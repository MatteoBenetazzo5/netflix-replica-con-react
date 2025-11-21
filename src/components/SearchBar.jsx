export default function SearchBar({ query, setQuery }) {
  return (
    <div className="bg-black p-3 border-bottom border-secondary">
      <input
        type="text"
        className="form-control bg-dark text-white"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}
