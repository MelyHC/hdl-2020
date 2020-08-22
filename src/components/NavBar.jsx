import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/generals/logo-principal.png';
import firebase from '../controller/firebase';

const NavBar = () => {
  const history = useHistory();

  const signOut = () => {
    firebase.logOut
      .then(() => {
        history.push('/')
      }).catch(err => alert(err.message))
  }

  return (
    <Navbar bg="light" expand="lg" className="bg-white fixed-top">
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
