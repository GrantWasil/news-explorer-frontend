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
    isValid
  } = props;
  return (
    <section className={isOpen
      ? `popup popup_type_${name} popup_opened`
      : `popup popup_type_${name}`}
    >
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__container">
        <button className="popup__close" aria-label="Close" type="reset" onClick={onClose}></button>
        <h3 className="popup__container-title">{title}</h3>
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
          {children}
          <button className={isValid ? "popup__container-save" : "popup__container-save_inactive popup__container-save"} type="submit" disabled={!isValid}>{submit}</button>
        </form>
        <p className="popup__text">
          or <Link to="/" className="popup__text-link" onClick={handleLink}>{linkText}</Link>
        </p>
      </div>
    </section>
  )

}

export default PopupWithForm;