import React from 'react';
import logoUser from '../assets/user.png';

const PostCard = () => {
  return (
    <>
      <div className="">
        <div className="">
          <img className="" src={logoUser} alt="Foto usuario" />
          {/* ${objPost.photo ? `<img className = "user" src="${objPost.photo}"> ` : '<img className = "user" src="assets/user.png">'} */}
          <div className="">
            <p>Publicado por: </p>
            <select className="">
              <option value="0" className="">Público</option>  {/* <option value="0" {(objPost.privacy === '1') || 'selected'} className="">Público</option>*/}
              <option value="1" className="">Privado</option>
            </select>
            <time datetime="date"></time>
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
        <div className="">
          <div className="">
            <label className="counterLike" ></label>
            <button type="button" className=""><img src="assets/like-solid-24.png" alt="2" />Me gusta</button>
          </div>
          <button type="button" className=""><img src="assets/add comment.png" alt="" />Comentar</button>
        </div>
        <div className="name-Commentary">
          <textarea className="text-CommentPost" rows="1" cols="40" />
          {/* <input type="image" className="send-Comment" src="assets/send.png" />  */}
        </div>
      </div>
    </>
  )
}

export default PostCard;