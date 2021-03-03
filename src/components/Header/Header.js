import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header(props) {
  const { page, handleLogin, handleLogout, handleMenu } = props;
  const user = React.useContext(CurrentUserContext);

  return (
    <CurrentUserContext.Provider value={user} >
      <header className={page === "news" ? "header__dark" : "header"}>
        <nav className="header__container container">
          {user.name ? (
            <>
              <Link
                to="/"
                className={
                  page === "news"
                    ? "header__title header__user"
                    : "header__title"
                }
              >
                NewsExplorer
              </Link>
              <div className="header__links">
                <Link
                  to="/"
                  className={
                    page === "news"
                      ? "header__links-home header__user"
                      : "header__links-home header__selected"
                  }
                >
                  Home
                </Link>
                <Link
                  to="/saved-news"
                  className={
                    page === "news"
                      ? "header__selected header__links-articles header__user"
                      : "header__links-articles"
                  }
                >
                  Saved articles
                </Link>
                <Link
                  to="/"
                  className={
                    page === "news"
                      ? "header__logout header__user"
                      : "header__logout"
                  }
                  onClick={handleLogout}
                >
                  <p
                    className={
                      page === "news"
                        ? "header__logout-name header__user"
                        : "header__logout-name"
                    }
                  >
                    {user.name}
                  </p>
                  <div
                    className={
                      page === "news"
                        ? "header__logout-img header__logout-dark"
                        : "header__logout-img"
                    }
                  />
                </Link>
                <div
                  className={
                    page === "news" ? "header__menu-dark" : "header__menu"
                  }
                  onClick={handleMenu}
                />
              </div>
            </>
          ) : (
            <>
              <Link
                to="/"
                className={
                  page === "news"
                    ? "header__title header__user"
                    : "header__title"
                }
              >
                NewsExplorer
              </Link>
              <div className="header__links">
                <Link
                  to="/"
                  className={
                    page === "news"
                      ? "header__links-home header__user"
                      : "header__selected header__links-home"
                  }
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className={
                    page === "news"
                      ? "header__login header__user"
                      : "header__login"
                  }
                >
                  <p
                    className={
                      page === "news"
                        ? "header__login-text header__user"
                        : "header__login-text"
                    }
                    onClick={handleLogin}
                  >
                    Sign in
                  </p>
                </Link>
                <div
                  className={
                    page === "news" ? "header__menu-dark" : "header__menu"
                  }
                  onClick={handleMenu}
                />
              </div>
            </>
          )}
        </nav>
      </header>
    </CurrentUserContext.Provider>
  );
}

export default Header;
