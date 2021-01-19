import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation(props) {
  const { handleClose, handleLogin } = props;
  return (
    <div className="navigation">
      <div className="navigation__header">
        <h2 className="navigation__title">NewsExplorer</h2>
        <div className="navigation__close" onClick={handleClose} />
      </div>
      <div className="navigation__links">
        <Link className="navigation__links-item" to="/" onClick={handleClose}>Home</Link>
        <Link className="navigation__links-item" to="/saved-news" onClick={handleClose}>Saved Articles</Link>
        <p className="navigation__login" onClick={handleLogin}>Sign in</p>
      </div>
    </div>
  )
}

export default Navigation;
