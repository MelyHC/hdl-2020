import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Consultations = () => (
  <>
    <NavBar />
    <div className="card pt-5 mt-5">
      <div className="card-header">
        Realiza tu pregunta y en breve te responerá un especialista
      </div>
      <div className="card-body">
        <h5 className="card-title">Escribe tu consulta:</h5>
        <textarea className="text-CommentPost" rows="3" cols="40"></textarea>
        <Link className="btn btn-primary">Enviar Consulta</Link>
      </div>
    </div>
  </>
);
export default Consultations;
