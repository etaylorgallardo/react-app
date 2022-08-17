import React from "react";
import CardWidget from "./CardWidget";
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-bar">
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <NavLink class="navbar-brand logo" href="index.html">
            <img
              src="img/reebok.png"
              class="logo"
              width="100"
              alt="Logotipo de la marca"
              height="85px"
            />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item menu">
                <NavLink 
                  class="nav-link active"
                  aria-current="page"
                  to={'/'}
                >
                  Reebok
                </NavLink>
              </li>
              <li class="nav-item menu">
                <NavLink class="nav-link" to={'/categoria'}>
                  Zapatillas
                </NavLink>
              </li>
              <li class="nav-item menu">
                <NavLink class="nav-link" to={'/categoria'}>
                  Poleras
                </NavLink>
              </li>
              <li class="nav-item menu">
                <NavLink class="nav-link" to={'/categoria'}>
                  Short
                </NavLink>
              </li>
              <li class="nav-item menu">
                <NavLink class="nav-link" to={'/cart'}>
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
