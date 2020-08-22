import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/generals/logo-principal.jpeg';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav-color">
      <Navbar.Brand>
        <Link to="/home"><img src={logo} alt="imagen de product" className="logo-header" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Nav className="navbar-nav">
          <Link className="nav-link" to="/home">Inicio</Link>
          <Link className="nav-link" to="/consultations">Consulta</Link>
          <Link className="nav-link" to="/home">Q&A</Link>
          <Link className="nav-link" to="/profile">Info</Link>
          <Link className="nav-link" to="/profile">Perfil</Link>
          <Link className="nav-link" to="/">Cerrar Sesión</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
