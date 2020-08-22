import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/generals/logo-principal.jpeg';
import imgWelcome from '../assets/generals/img-welcome.png';

const Welcome = () => (
  <div className="container-fluid">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col align-self-center col-10">
          <div className="row justify-content-center">
            <img className="logo-welcome img-fluid" src={logo} alt="logo" />
          </div>
          <div className="row justify-content-center">
            <p className="">Un espacio para mejorar nuestra salud</p>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-xl-4 col-sm-8 align-self-center">
              <Link className="btn btn-ts btn-block" to="/register">
                Registrate
              </Link>
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-xl-4 col-sm-8 align-self-center">
              <Link className="btn btn-ts btn-block" to="/login">
                Inicia Sesión
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <img className="img-welcome img-fluid" src={imgWelcome} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Welcome;
