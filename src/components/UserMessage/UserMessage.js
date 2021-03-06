import React from "react";
import "./UserMessage.css";

function UserMessage(props) {
  const { title, link, isOpen, onClose } = props;
  return (
    <div className={isOpen ? `message message_opened` : `message`}>
      <div className="message__overlay" />
      <div className="message__container">
        <button className="message__close" onClick={onClose}></button>
        <h2 className="message__title">Registration successfully completed</h2>
        <p className="message__link">Sign in</p>
      </div>
    </div>
  );
}

export default UserMessage;
