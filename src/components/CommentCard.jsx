import React from 'react';
import iconSave from '../assets/icons/icon-save.png';
import iconCancel from '../assets/icons/icon-cancel.png';
import userImg from '../assets/icons/icon-user.png';

const CommentCard = () => (
  <div className="card">
    <img className="img rounded-circle" src={userImg} alt="usuarioImg" />
    <div className="d-flex flex-row">
      <div className="row">
        <div className="col-sm-8 px-3 my-1">
          <p id="nameUserC">SABINA </p>
          <time dateTime="date">21/8/2020</time>
        </div>
        <div className="">
          <span>...</span>
          <ul className="optionPost"> 
            <li className="btnEditComment">Editar</li>
            <li className="btnRemoveComment">Eliminar</li>
          </ul>
        </div>
      </div>
      <button className="btn-save-comment" type="button">
        <img className="img-save" src={iconSave} alt="icon save" />
      </button>
      <button className="btn-cancel-comment" type="button">
        <img className="img-cancel" src={iconCancel} alt="icon cancel" />
      </button>
      <p className="text-Comment" rows="1" cols="40">ComentarioX</p>
    </div>
  </div>
);
export default CommentCard;
