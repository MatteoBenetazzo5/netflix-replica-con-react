import { useState } from "react"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState("")

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch)
    setQuery("") // reset input quando si chiude
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
          {/* LOGO */}
          <a className="navbar-logo">
            <img
              src="/Netflix-assets/assets/netflix_logo.png"
              style={{ width: "100px" }}
              alt="Netflix"
            />
          </a>

          {/* HAMBURGER MENU */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* CONTENUTO */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Tv Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Movies</a>
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
              {/* ICONA SEARCH */}
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
                    <a className="dropdown-item" href="/profile.html">
                      PROFILE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/settings.html">
                      SETTINGS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* SEARCH BAR  */}
      {showSearch && <SearchBar query={query} setQuery={setQuery} />}

      {/* RISULTATI RICERCA */}
      {query.length > 0 && <SearchResults query={query} />}
    </>
  )
}
