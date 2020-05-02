import React from "react";
import logo from "../assets/recursos/logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="contLogo">
        <img src={logo} width="150px" />
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="!#">
              Inicio <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="!#">
              Nosotros <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="!#">
              Servicios <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="!#">
              Planes web <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="!#">
              Blog <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Tienda
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Iniciar sesión
            </a>
          </li>
          <li className="nav-item">
            <a className=" btnP2" href="!#">
              Registrarse
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
