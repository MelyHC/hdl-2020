import React from 'react';
import logoUser from '../assets/icons/icon-user.png';
import AddImg from '../assets/icons/icon-addImg.png';

const CreatePost = () => {
  return (
    <div className="card">
      <div className="d-flex flex-row">
        {/* <div className="col-md-4"> */}
        {/* ${currentUser().photoURL ? `<img src= "${currentUser().photoURL}" class = "user" >` : '<img class = "user" src="assets/user.png">'} */}
        <div>
          <img src={logoUser} className="img rounded-circle" alt="foto usuario" />
        </div>
        {/* </div> */}
        <div className="col-sm-8 px-3 my-1">
          {/* <div class=""> */}
          <textarea className="form-control" rows="3" />
          <div className="form-group">
            <input type="file" id="add-image" accept="image/*" className="d-none" />
            <label for="add-image">
              <img alt="Agregar imagen" src={AddImg} />
            </label>
          </div>
          <select className="form-control mb-2">
            <option value="0" selected>Público</option>
            <option value="1">Privado</option>
          </select>
          <div>
            <button className="btn btn-success" type="button">Publicar</button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
