import React from 'react';
import logoUser from '../assets/icons/icon-user.png';
import coverPage from '../assets/generals/logo-principal.jpeg';
import iconSave from '../assets/icons/icon-save.png';
import iconCancel from '../assets/icons/icon-cancel.png';

const UserInfo = () => (
  <div className="">
    <div className="profile-container">
      <figure><img className="img-coverPage" src={coverPage} alt="cover page" /></figure>
    </div>
    <div className="logged-user-data">
      <img className="img rounded-circle" src={logoUser} alt="icon user" />
      <div className="information-user">
        <div className="name">
          <p id="editProfile" contenteditable="false"> Sabina Canchumani Huaman</p>
          <p> Doctora en Ginecología</p>
        </div>
        <button className="btn-save-comment" type="button">
          <img className="img-save" src={iconSave} alt="icon save" />
        </button>
        <button className="btn-cancel-comment" type="button">
          <img className="img-cancel" src={iconCancel} alt="icon cancel" />
        </button>
        <button className="btn btn-bs" type="button">Editar Perfil</button>
      </div>
    </div>
  </div>
);
export default UserInfo;
