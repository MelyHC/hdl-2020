import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../controller/firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();

  const logInUser = (e) => {
    e.preventDefault();
    const { email, pass } = e.target;

    firebase.signIn(email.value, pass.value)
      .then(user => {
        history.push('/home')
      }).catch(err => alert(err.message))
  }

  return (
    <div className="row p-0 m-0 justify-content-center align-items-center vh-100">
      <div className="col-sm-6 col-md-5 col-lg-4">
        <p className="m-0 text-center text-rbga">Únete a esta gran comunidad</p>
        <form className="text-center" onSubmit={logInUser}>
          <input type="email" name="email" className="form-control my-3 bottom px-0" placeholder="Correo" required />
          <input type="password" name="pass" className="form-control my-3 bottom px-0" placeholder="Contraseña" required />
          <button className="btn btn-pink my-3 text-white rounded-pill w-100">Ingresar</button>
          <p className="text-rbga">¿No tienes cuenta? <Link className="text-pink" to="/register">Regístrate</Link></p>
        </form>
      </div >
    </div>
  )
}

export default Login;