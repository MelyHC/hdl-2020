import React from 'react';
import iconSend from '../assets/icons/icon-send.png';

const CreateComment = () => (
  <div className="name-Commentary">
    <textarea className="text-CommentPost" rows="1" cols="40">comentando</textarea>
    <img src={iconSend} className="icon-send" alt="icon send" />
  </div>
);
export default CreateComment;
