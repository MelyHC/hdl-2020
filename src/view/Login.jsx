import React from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/icon-google.png';

const Login = () => {
  return (
    <form >
      {/* <p> Bienvenid@s a , una red social para Estudiantes, Padres y Maestros de todo el Perú </p> */}
      <div>
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button> Ingresar </button>
      </div>
      <p>O puedes ingresar con ...</p>
      <img src={google} alt="Google" />
      <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link> </p>
    </form>
  )
}

export default Login;