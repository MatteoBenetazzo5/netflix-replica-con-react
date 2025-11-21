export default function Footer() {
  return (
    <footer className="container-xxl px-3 px-md-4 py-5 text-secondary">
      {/* ICONE SOCIAL */}
      <div className="d-flex align-items-center gap-3 mb-3">
        <i className="bi bi-facebook fs-4"></i>
        <i className="bi bi-instagram fs-4"></i>
        <i className="bi bi-twitter-x fs-4"></i>
        <i className="bi bi-youtube fs-4"></i>
      </div>

      {/* LINK */}
      <div className="row row-cols-2 row-cols-md-4 g-2 mb-3 small">
        <div className="col">
          <ul className="list-unstyled mb-0">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Audio and Subtitles
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Media Center
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul className="list-unstyled mb-0">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Audio Description
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Investor Relations
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul className="list-unstyled mb-0">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul className="list-unstyled mb-0">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Gift Cards
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Corporate Information
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTONE */}
      <button type="button" className="btn btn-outline-secondary btn-sm mb-3">
        Service Code
      </button>

      <div className="small">
        © 1997–2019 Netflix, Inc. (i-0000dc2df8f9c0de)
      </div>
    </footer>
  )
}
