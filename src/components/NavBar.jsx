import React from "react";
import CardWidget from "./CardWidget";
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand logo" to="/">
            <img
              src="img/reebok.png"
              className="logo"
              width="100"
              alt="Logotipo de la marca"
              height="85px"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item menu">
                <NavLink 
                  className="nav-link active"
                  aria-current="page"
                  to='/'
                >
                  Reebok
                </NavLink>
              </li>
              <li className="nav-item menu">
                <NavLink className="nav-link" to='/categoria/zapatillas'>
                  Zapatillas
                </NavLink>
              </li>
              <li className="nav-item menu">
                <NavLink className="nav-link" to='/categoria/poleras'>
                  Poleras
                </NavLink>
              </li>
              <li className="nav-item menu">
                <NavLink className="nav-link" to='/categoria/pelotas'>
                  Pelotas
                </NavLink>
              </li>
              <li className="nav-item menu">
                <NavLink className="nav-link" to='/cart'>
                  <CardWidget />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
