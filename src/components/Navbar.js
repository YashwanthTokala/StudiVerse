import { useLocation } from 'react-router-dom';

const Navbar = ({ darkmode, setDarkmode }) => {
  const location = useLocation();

  return (
    <div>
      <nav className={`navbar navbar-expand-lg shadow ${darkmode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Studiverse</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/resources" ? "active" : ""}`} href="/resources">Resources</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/eventboard" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Event Board
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/tech">Tech</a></li>
                  <li><a className="dropdown-item" href="/fest">Fest</a></li>
                  <li><a className="dropdown-item" href="/hackathons">Hackathons</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <button
            className={`btn ${darkmode ? 'btn-light' : 'btn-dark'}`}
            onClick={() => setDarkmode(!darkmode)}
          >
            {darkmode ? <div><i className="fa-regular fa-sun"></i></div> : <div><i className="fa-regular fa-moon"></i></div>}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
