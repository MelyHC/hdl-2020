import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/login" />
        </div>
        <div>
          <Link to="/register" />
        </div>
        <nav>
          <Link to="/home">Inicio</Link>
          <Link to="/profile">Perfil</Link>
          <Link>Cerrar Sesion</Link>
        </nav>
      </header>
      <section>
        {/* <div class="user-information"> </div> */}
        <div>
          <p> °Mis Publicaciones </p>
          <section>
            <div>
              {/* ${currentUser().photoURL ? `<img src= "${currentUser().photoURL}" class = "user" >` : '<img class = "user" src="assets/user.png">'} */}
              <div>
                <textarea rows="5" cols="50" />
              </div>
            </div>
            <div>
              <progress value="0" max="100">0%</progress>
              <input type="file" accept="image/*" />
              <label for="addImage">
                {/* <img src="assets/agregarIng.png" /> */}
              </label>
              <select>
                <option value="0">Público</option>
                <option value="1">Privado</option>
              </select>
              <button>Publicar</button>
            </div>
          </section>
          {/* <section id="allPost" class="post-done">
          </section> */}
        </div>
      </section>
    </>
  )
}

export default Profile;