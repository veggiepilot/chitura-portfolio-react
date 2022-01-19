import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    About
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navigation;
