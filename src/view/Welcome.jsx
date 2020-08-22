import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/generals/logo-principal.png';
import imgWelcome from '../assets/generals/img-welcome.png';

const Welcome = () => (
  // <div className="container-fluid">
  <div className="d-flex justify-content-center bg-light-pink">
    <div className="row vw-100 p-0 m-0 justify-content-center align-items-center form-center vh-100">
      <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 text-center bg-white">
        <img className="size-img mt-2" src={logo} alt="logo" />
        <p className="text-rbga">Un espacio para mejorar nuestra salud</p>
        <Link className="btn btn-pink my-3 text-white rounded-pill w-100" to="/register">
          Registrate
        </Link>
        <Link className="btn btn-pink my-3 text-white rounded-pill w-100" to="/login">
          Inicia Sesión
        </Link>
        <img className="img-fluid fixed-bottom fixed-md-none m-auto" src={imgWelcome} alt="logo" />
        </div>
    </div>
  </div>
);
export default Welcome;
