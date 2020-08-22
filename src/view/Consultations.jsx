import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import logoUser from '../assets/icons/icon-user.png';

const Consultations = () => (
  <>
    <NavBar />
    <div className="bg-gray vh-100 pt-5 mt-5 text-center">
      <h3 className="text-pink">Hacer consulta</h3>
      <div className="row justify-content-center">
        <div className="col-8 col-md-6 col-lg-4 d-flex flex-column p-3 bg-white">
          {/* <div className="col-md-4"> */}
          {/* ${currentUser().photoURL ? `<img src= "${currentUser().photoURL}" class = "user" >` : '<img class = "user" src="assets/user.png">'} */}
          <div className="d-flex flex-row p-0 align-items-center pb-3">
            <div className="col-3 p-0">
              <img src={logoUser} className="img-user rounded-circle" alt="foto usuario" />
            </div>
            <h5 className="col-4 mb-4 p-0">Janet Bejarano</h5>
            <select className="form-control form-control-sm mb-2 col-5 border-0">
              <option value="0" selected>Consulta ginecológica</option>
              <option value="1">Consulta obstétrica</option>
            </select>
          </div>
          {/* </div> */}
          <div className="">
            {/* <div class=""> */}
            <textarea className="form-control no-resize" rows="3" placeholder="¿Cuál es tu consulta?" />
            <div className="row align-items-center justify-content-around border-top pt-3 mt-3">

              <button className="btn btn-light-pink col-5" type="button">Publicar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Consultations;
