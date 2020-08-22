import React from 'react';
import logoUser from '../assets/icons/icon-user.png';
import CreateComment from './CreateComment';
import CommentCard from './CommentCard';
import AddComment from '../assets/icons/icon-addComment.png';

const PostCard = () => {
  return (
    <div className="card">
      <div className="d-flex flex-row">
        <div className="col-sm-8 px-3 my-1">
          <img className="img rounded-circle" src={logoUser} alt="Foto usuario" />
          {/* ${objPost.photo ? `<img className = "user" src="${objPost.photo}"> ` : '<img className = "user" src="assets/user.png">'} */}
          <div className="">
            <p>Publicado por: </p>
            <select className="form-control mb-2">
              <option value="0" className="">Público</option>  {/* <option value="0" {(objPost.privacy === '1') || 'selected'} className="">Público</option>*/}
              <option value="1" className="">Privado</option>
            </select>
            <time dateTime="date"></time>
          </div>
        </div>
        {/* ${(user.uid === objPost.useruid) ? */}
        <div className="">
          <span>...</span>
          <ul className="">
            <li className="">Editar</li>
            <li className="">Eliminar</li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="">
          <p contenteditable="false" id="editPost" ></p>
          {/* ${objPost.url ? `<img id="photoPost" src="${objPost.url}">` : ''} */}
        </div>
        {/* <button className="hide" hidden id="btnSave">💾</button>
        <button className="hide" hidden id="btnCancel">✖️</button> */}
        <div className="row justify-content-center">
          <div className="">
            <label className="counterLike" ></label>
            <button type="button" className=""><img src="assets/like-solid-24.png" alt="2" />Me gusta</button>
          </div>
          <div>
            <button type="button" className=""><img src={AddComment} alt="" />Comentar</button>
          </div>
        </div>
        <div>
          <CreateComment />
        </div>
        <div>
          <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
