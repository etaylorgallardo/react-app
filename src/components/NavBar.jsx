import React from "react";
import CardWidget from "./CardWidget";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="index.html">
            <img
              src="img/reebok.png"
              class="logo"
              width="100"
              alt="Logotipo de la marca"
              height="85px"
            />
          </a>
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
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Reebok
                </a>
              </li>
              <li class="nav-item menu">
                <a class="nav-link" href="#">
                  Zapatillas
                </a>
              </li>
              <li class="nav-item menu">
                <a class="nav-link" href="#">
                  Poleras
                </a>
              </li>
              <li class="nav-item menu">
                <a class="nav-link" href="#">
                  Short
                </a>
              </li>
              <li class="nav-item menu">
                <a class="nav-link" href="#">
                  <CardWidget />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
