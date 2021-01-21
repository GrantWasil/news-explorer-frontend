import React from 'react';
import { Link } from 'react-router-dom'
import './PopupWithForm.css';

function PopupWithForm(props) {
  const {
    isOpen,
    name,
    onClose,
    title,
    handleSubmit,
    children,
    submit,
    linkText,
    handleLink,
  } = props;
  return (
    <section className={isOpen
      ? `popup popup_${name} popup__opened`
      : `popup popup_${name}`}
    >
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__container">
        <button className="popup__close" aria-label="Close" type="reset" onClick={onClose}></button>
        <h3 className="popup__container-title">{title}</h3>
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
          {children}
          <button className="popup__container-save" type="submit">{submit}</button>
        </form>
        <p className="popup__text">
          or <Link to="/" className="popup__text-link" onClick={handleLink}>{linkText}</Link>
        </p>
      </div>
    </section>
  )

}

export default PopupWithForm;