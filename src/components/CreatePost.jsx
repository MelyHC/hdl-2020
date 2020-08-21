import React from 'react';
import logoUser from '../assets/user.png'

const CreatePost = () => {
  return (
    <div class="card col col-md-7 p-0">
      <div className="d-flex flex-row">
        {/* <div className="col-md-4"> */}
        {/* ${currentUser().photoURL ? `<img src= "${currentUser().photoURL}" class = "user" >` : '<img class = "user" src="assets/user.png">'} */}
        <img src={logoUser} className="col-2 col-sm-4 p-0 img" alt="foto usuario" />
        {/* </div> */}
        <div class="col-10 col-sm-8 px-3 my-3">
          {/* <div class=""> */}
          <textarea className="form-control" rows="3" />
          <div className="form-group">
            <input type="file" id="add-image" accept="image/*" class="d-none" />
            <label for="add-image">
              <img alt="Agregar imagen" src="assets/agregarIng.png" />
            </label>
          </div>
          <select className="form-control mb-2">
            <option value="0" selected>Público</option>
            <option value="1">Privado</option>
          </select>
          <button className="btn btn-success">Publicar</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default CreatePost;