import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup(props) {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(e.target.validationMessage);
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordError(e.target.validationMessage);
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
    setUsernameError(e.target.validationMessage);
    setIsValid(e.target.closest("form").checkValidity());
  }

  function clearStates() {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
    setUsername('');
    setUsernameError('');
    setIsValid(false);
  }

  function handleClose() {
    props.onClose();
    clearStates()
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !username) {
      return;
    } else {
      props.handleRegisterUser(email, password, username)
      clearStates();
    }
  }

  return (
    <PopupWithForm
      name="register"
      title="Sign up"
      isOpen={props.isOpen}
      onClose={handleClose}
      handleSubmit={handleSubmit}
      submit="Sign up"
      linkText="Sign in"
      handleLink={props.onLink}
      isValid={isValid}
    >
      <fieldset className="popup__field">
        <label className="popup__label">Email</label>
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
        >{emailError}</span>
        <label className="popup__label">Password</label>
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
        >{passwordError}</span>
        <label className="popup__label">Username</label>
        <input
          className="popup__container-username popup__input"
          id="newUsername-input"
          placeholder="Enter your username"
          type="text"
          name="username"
          minLength="2"
          maxLength="200"
          required
          onChange={handleUsernameChange}
          value={username}
        />
        <span
          className="popup__input-error"
          id="newUsername-input-error"
        >{usernameError}</span>
      </fieldset>
    </PopupWithForm>
  )
}

export default RegistrationPopup;