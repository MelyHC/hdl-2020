import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/link">Yunapay</Link> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link" to="/home">Inicio</Link>
          <Link className="nav-link" to="/profile">Perfil</Link>
          <p className="nav-link m-0">Cerrar Sesion</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;