import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
  }

  return (
    <PopupWithForm
      name="login"
      title="Sign in"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleSubmit={handleSubmit}
      submit="Sign in"
      linkText="Sign up"
      handleLink={props.onLink}
    >
      <fieldset className="popup__field">
        <label for="newEmail-input" className="popup__label">Email</label>
        <input
          className="popup__container-email popup__input"
          id="newEmail-input"
          placeholder="Enter email"
          type="email"
          name="email"
          minLength="2"
          maxLength="40"
          required
          onChange={handleEmailChange}
          value={email}
        />
        <span
          className="popup__input-error"
          id="newEmail-input-error"
        ></span>
        <label for="newPassword-input" className="popup__label">Password</label>
        <input
          className="popup__container-password popup__input"
          id="newPassword-input"
          placeholder="Enter password"
          type="password"
          name="password"
          minLength="2"
          maxLength="200"
          required
          onChange={handlePasswordChange}
          value={password}
        />
        <span
          className="popup__input-error"
          id="newPassword-input-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default LoginPopup;