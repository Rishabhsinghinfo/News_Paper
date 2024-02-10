const Navbar = ({ setCategory }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
        <marquee behavior="" direction="right"><a className="navbar-brand" href="#">
            <span className="">
              <span className="badge bg-danger"> News</span> Paper
            </span>
          </a></marquee> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div
                    className="nav-link"
                    onClick={() => setCategory("technology")}
                  >
                    Technology
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    onClick={() => setCategory("business")}
                  >
                    Business
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    onClick={() => setCategory("health")}
                  >
                    Health
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    onClick={() => setCategory("sports")}
                  >
                    Sports
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    onClick={() => setCategory("entertainment")}
                  >
                    Entertainment
                  </div>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
