import React from 'react';
import logoUser from '../assets/icons/icon-user.png';
import AddImg from '../assets/icons/icon-addImg.png';

const CreatePost = () => {
  return (
    <div className="bg-white my-3">
      <div className="d-flex flex-column p-3">
        {/* <div className="col-md-4"> */}
        {/* ${currentUser().photoURL ? `<img src= "${currentUser().photoURL}" class = "user" >` : '<img class = "user" src="assets/user.png">'} */}
        <div className="d-flex flex-row p-0 align-items-center pb-3">
          <div className="col-3 p-0">
            <img src={logoUser} className="img-user rounded-circle" alt="foto usuario" />
          </div>
          <h5 className="col-5 mb-4 p-0">Mely</h5>
          <select className="form-control mb-2 col-4 border-0">
            <option value="0" selected>Consejos</option>
            <option value="1">Experencias</option>
            <option value="2">Denuncias</option>
          </select>
        </div>
        {/* </div> */}
        <div className="">
          {/* <div class=""> */}
          <textarea className="form-control no-resize" rows="3" placeholder="¿Qué quieres compartir hoy?" />
          <div className="row align-items-center justify-content-around border-top pt-3 mt-3">
            <div className="form-group btn p-0 m-0 col-5 text-center border-right">
              <input type="file" id="add-image" accept="image/*" className="d-none" />
              <label for="add-image" className="m-0 d-flex align-items-center justify-content-center">
                <img className="btn" alt="Agregar imagen" src={AddImg} />
                <p className="btn px-1 m-0">Añadir imagen</p>
              </label>
            </div>
            <button className="btn btn-light-pink col-5" type="button">Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
