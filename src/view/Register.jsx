import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <form>
      <div>
        {/* <div > error</div>  */}
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button>Registrar</button>
        <p>Tienes cuenta <Link to="/login">Inicia sesión </Link></p>
      </div>
    </form>
  );
};

export default Register;
