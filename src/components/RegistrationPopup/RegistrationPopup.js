import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !username) {
      return;
    }
  }

  return (
    <PopupWithForm
      name="register"
      title="Sign up"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleSubmit={handleSubmit}
      submit="Sign in"
      linkText="Sign in"
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
        <label for="newUsername-input" className="popup__label">Username</label>
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
        ></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default RegistrationPopup;