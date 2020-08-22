import React from 'react';
import { Link } from 'react-router-dom';
import { currentUser, signIn } from '../controller/firebase';
import { useHistory } from 'react-router-dom';
import logo from '../assets/generals/logo-principal.png';
import { getUser } from '../controller/firestore';

const Login = () => {

  const history = useHistory();

  const logInUser = (e) => {
    e.preventDefault();
    const { email, pass } = e.target;

    signIn(email.value, pass.value)
      .then(res => {
        if (res.user.emailVerified) {
          // const currentUser = currentUser();
          // console.log(currentUser);
          history.push('/home');
        }
        else alert('Activa tu cuenta para poder continuar');

      }).catch(err => alert(err.message))
  }

  return (
    <div className="row p-0 m-0 justify-content-center align-items-center vh-100 bg-light-pink">
      <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 bg-white">
        <div className="d-flex justify-content-center">
          <img className="size-img mt-2" src={logo} alt="Logo Yanapay" />
        </div>
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
