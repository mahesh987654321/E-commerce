import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to={"/"} className="navbar-brand" href="#">
              🛒 MB brand
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/catagories"}
                  className="nav-link"
                  aria-current="page"
                >
                  Catagories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/contact"}
                  className="nav-link"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/register"} className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/cartpage"} className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
