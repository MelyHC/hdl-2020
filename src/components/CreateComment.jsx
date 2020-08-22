import React from 'react';
import iconSend from '../assets/icons/icon-send.png';

const CreateComment = () => (
  <div className="p-3 d-flex justify-content-between align-items-center border-bottom">
    <textarea className="form-control no-resize" rows="1" />
    <img src={iconSend} className="icon-send h-initial" alt="icon send" />
  </div>
);
export default CreateComment;
