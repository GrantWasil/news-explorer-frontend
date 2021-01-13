import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  const { userEmail } = props;
  return (
    <div className="header">
      <div className="header__container container">
        <Link to="/" className="header__title">NewsExplorer</Link>
        {
          userEmail
            ? (
              <div className="header__links">
                <Link to="/" className="header__links-home">Home</Link>
                <Link to="/saved-news" className="header__links-articles">Saved articles</Link>
                <Link to="/signin" className="header__logout">
                  <p className="header__logout-name">Grant</p>
                  <div className="header__logout-img" />
                </Link>
              </div>
            )
            : (
              <div className="header__links">
                <Link to="/">Home</Link>
                <Link to="/signin" className="header__links-login">Sign In</Link>
              </div>
            )

        }
      </div>
    </div>
  );
}

export default Header;
