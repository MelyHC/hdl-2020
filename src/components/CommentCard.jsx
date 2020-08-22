import React from 'react';
import iconSave from '../assets/icons/icon-save.png';
import iconCancel from '../assets/icons/icon-cancel.png';
import userImg from '../assets/icons/icon-user.png';

const CommentCard = () => (
  <div className="">
    <div className="d-flex flex-row justify-content-between py-3">
      <div className="col-3">
        <img className="img-user rounded-circle " src={userImg} alt="Foto usuario" />
      </div>
      {/* ${objPost.photo ? `<img className = "user" src="${objPost.photo}"> ` : '<img className = "user" src="assets/user.png">'} */}
      <div className="col-7 p-0 d-flex flex-column justify-content-center">
        <p className=" p-2 m-0 bg-light rounded">
          <b className="d-block">Sabina</b>
          <span className="d-block">Mensaje de bienvenida</span>
        </p>
        <div className="d-flex align-items-center">
          <time className="text-muted" dateTime="date">12 h</time>
          <div className="mx-2">
            <img className="btn img-edit p-0 mr-2" src={iconSave} alt="icon save" />
            <img className="img-edit btn p-0" src={iconCancel} alt="icon cancel" />
          </div>
        </div>
      </div>
      <div className="col-2 text-right">
        <div className="btn-group dropleft">
          <button className="btn btn-sm btn-light bg-white border-0" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ...
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span className="dropdown-item">Editar</span>
            <span className="dropdown-item">Eliminar</span>
          </div>
        </div>
      </div>
    </div>
    {/* <p className="text-Comment" rows="1" cols="40">ComentarioX</p> */}
  </div>
);
export default CommentCard;
