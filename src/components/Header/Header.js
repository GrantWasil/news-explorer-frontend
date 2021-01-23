import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  const { user, page, handleLogin, handleLogout, handleMenu } = props;

  return (
    <header className={page === 'news' ? 'header__dark' : 'header'}>
      <nav className="header__container container">
        {
          user
            ? (
              <>
                <Link to="/" className={page === 'news' ? 'header__title header__user' : 'header__title'}>NewsExplorer</Link>
                <div className="header__links">
                  <Link to="/" className={page === 'news' ? 'header__links-home header__user' : 'header__links-home header__selected'}>Home</Link>
                  <Link to="/saved-news" className={page === 'news' ? 'header__selected header__links-articles header__user' : 'header__links-articles'}>Saved articles</Link>
                  <Link to="/" className={page === 'news' ? 'header__logout header__user' : 'header__logout'} onClick={handleLogout}>
                    <p className={page === 'news' ? 'header__logout-name header__user' : 'header__logout-name'}>{user}</p>
                    <div className={page === 'news' ? 'header__logout-img header__logout-dark' : 'header__logout-img'} />
                  </Link>
                  <div className={page === 'news' ? 'header__menu-dark' : 'header__menu'} onClick={handleMenu} />
                </div>
              </>
            )
            : (
              <>
                <Link to="/" className={page === 'news' ? 'header__title header__user' : 'header__title'}>NewsExplorer</Link>
                <div className="header__links">
                  <Link to="/" className={page === 'news' ? 'header__links-home header__user' : 'header__selected header__links-home'}>Home</Link>
                  <Link to="/" className={page === 'news' ? 'header__login header__user' : 'header__login'}>
                    <p className={page === 'news' ? 'header__login-text header__user' : 'header__login-text'} onClick={handleLogin}>Sign in</p>
                  </Link>
                  <div className={page === 'news' ? 'header__menu-dark' : 'header__menu'} onClick={handleMenu} />
                </div>
              </>
            )

        }
      </nav>
    </header>
  );
}

export default Header;
