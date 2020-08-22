import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../controller/firebase';
import { useHistory } from 'react-router-dom';
import logo from '../assets/generals/logo-principal.png';

const Register = () => {

  const info = createRef()
  const history = useHistory();

  const registerUser = (e) => {
    e.preventDefault();
    const { email, pass, name, age, country, liveCountry, typeUser, cmp, rne } = e.target;
    const user = {
      email: email.value,
      pass: pass.value,
      name: name.value,
      age: parseInt(age.value),
      country: country.value,
      liveCountry: liveCountry.value,
      typeUser: parseInt(typeUser.value),
      cmp: !cmp.value ? null : parseInt(cmp.value),
      rne: !rne.value ? null : parseInt(rne.value)
    }
    firebase.createUser(user)
      .then(res => {
        history.push('/login');
        alert('Se envio un correo de verificación a tu email, por favor revisa tu bandeja de entrada o spam.');
      }).catch(err => alert(err.message))
  }

  const viewInfoDoc = (e) => {
    const { value } = e.target;
    const { classList, children } = info.current;
    const { cmp, rne } = children;
    console.log(typeof value)
    if (value === '0') {
      classList.add('d-none')
      cmp.required = false;
      rne.required = false;
    } else {
      classList.remove('d-none');
      cmp.required = true;
      rne.required = true;
    }
  }

  return (
    <div className="row p-0 m-0 justify-content-center align-items-center vh-100 bg-light-pink">
      <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 bg-white">
        <div className="d-flex justify-content-center">
          <img className="size-img mt-2" src={logo} alt="Logo Yanapay" />
        </div>
        <p className="m-0 text-center text-rbga">Únete a esta gran comunidad</p>
        <form className="text-center" onSubmit={registerUser}>
          <input className="form-control my-3 bottom px-0" name="name" type="text" placeholder="Nombre y Apellido" required />
          <div className="form-group row mx-0 my-3 justify-content-between">
            <select className="form-control col-8 bottom px-0" name="country" required>
              <option disabled selected hidden value="">Nacionalidad</option>
              <option value="PE">Peruana/o</option>
              <option value="CL">Chilena/o</option>
              <option value="CO">Colombiana/o</option>
            </select>
            <input className="form-control col-3 bottom px-0" name="age" type="text" placeholder="Edad" required />
          </div>
          <select className="form-control my-3 bottom px-0" name="liveCountry" required>
            <option disabled selected hidden value="">País donde reside</option>
            <option value="PE">Perú</option>
            <option value="CL">Chile</option>
            <option value="CO">Colombia</option>
          </select>
          <select onChange={viewInfoDoc} className="form-control my-3 bottom px-0" name="typeUser" required>
            <option disabled selected hidden value="">Yo</option>
            <option value="0">Usuaria/o</option>
            <option value="1">Médica/o</option>
          </select>
          <div ref={info} className="form-group row mx-0 my-3 justify-content-between d-none">
            <input className="form-control col-5 bottom px-0" name="cmp" type="text" placeholder="Ingrese su CMP" required={false} />
            <input className="form-control col-6 bottom px-0" name="rne" type="text" placeholder="Ingrese su RNE" required={false} />
          </div>
          <input name="email" type="email" className="form-control my-3 bottom px-0" placeholder="Correo" required />
          <input name="pass" type="password" className="form-control my-3 bottom px-0" placeholder="Crear contraseña" required />
          <div className="d-none"> error</div>
          <button className="btn btn-pink my-3 text-white rounded-pill w-100">Crear cuenta</button>
          <p className="text-rbga">Tienes cuenta <Link className="text-pink" to="/login">Inicia sesión </Link></p>
        </form>
      </div>
    </div >
  )
}

export default Register;
