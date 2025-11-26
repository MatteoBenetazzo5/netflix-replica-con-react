import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)

  const [query, setQuery] = useState("")

  const location = useLocation()

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch)
    setQuery("")
  }

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link"

  // RENDER 
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
          {/* LOGO → va alla home */}
          <Link to="/" className="navbar-logo">
            <img
              src="/Netflix-assets/assets/netflix_logo.png"
              style={{ width: "100px" }}
              alt="Netflix"
            />
          </Link>

          {/* MENU PER TELEFONI */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            {/* MENU DI SINISTRA */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={isActive("/")} to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className={isActive("/tv-shows")} to="/tv-shows">
                  Tv Shows
                </Link>
              </li>

              <li className="nav-item">
                <Link className={isActive("/movies")} to="/movies">
                  Movies
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link">Recently Added</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">My List</a>
              </li>
            </ul>

            {/* DESTRA */}
            <div className="d-flex align-items-center gap-3 ms-auto">
              {/* SEARCH ICON */}
              <button
                className="btn text-white"
                onClick={handleSearchIconClick}
              >
                <i className="bi bi-search"></i>
              </button>

              <span className="d-none d-md-inline text-white">ADULTS</span>

              <a className="text-white">
                <i className="bi bi-bell"></i>
              </a>

              {/* PROFILO */}
              <div className="dropdown">
                <button
                  className="btn p-0 border-0 bg-transparent"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="/Netflix-assets/assets/Adults.png"
                    alt="Profilo"
                    className="rounded"
                    style={{
                      width: "32px",
                      height: "32px",
                      objectFit: "cover",
                    }}
                  />
                </button>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item">PROFILE</a>
                  </li>
                  <li>
                    <a className="dropdown-item">SETTINGS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* SEARCH BAR */}
      {showSearch && <SearchBar query={query} setQuery={setQuery} />}

      {/* RISULTATI RICERCA */}
      {query.length > 0 && <SearchResults query={query} />}
    </>
  )
}
