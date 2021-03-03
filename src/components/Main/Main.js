import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import Footer from "../Footer/Footer";
import RegistrationPopup from "../RegistrationPopup/RegistrationPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import SavedNews from "../SavedNews/SavedNews";
import Navigation from "../Navigation/Navigation";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import "./Main.css";

function Main() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(
    false
  );
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [results, setResults] = React.useState({});
  const [isPreloaderShown, setIsPreloaderShown] = React.useState(false);
  const [isNotFoundShown, setIsNotFoundShown] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [userArticles, setUserArticles] = React.useState({});

  React.useEffect(() => {
    api.checkUserData()
      .then((res) => {
        if (res.data) {
          setUser(res.data)
          api.getArticles()
            .then((res) => {
              console.log(res.filter(a => a.owner ));
            })
        }
      })
  }, [])

  function onLogin() {
    setIsLoginPopupOpen(true);
    setIsHeaderMenuOpen(false);
    setIsRegistrationPopupOpen(false);
  }

  function onRegister() {
    setIsLoginPopupOpen(false);
    setIsRegistrationPopupOpen(true);
  }

  function onMenu() {
    setIsHeaderMenuOpen(true);
  }

  function closeAllPopups() {
    setIsRegistrationPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsHeaderMenuOpen(false);
  }

  function onSearch(input) {
    setResults({});
    setKeyword(input);
    setIsNotFoundShown(false);
    setIsPreloaderShown(true);
    api.getSearchData(input)
      .then(data => {
        if (data.articles.length > 0) {
          setResults(data)
        } else {
          setIsNotFoundShown(true);
        }
        setIsPreloaderShown(false);
      })
      .catch(e => console.log(e));
  }

  function onRegisterUser(email, password, username) {
    api.registerUser(email, password, username)
      .then((data) => {
        if (data) {
          setUser(data);
          closeAllPopups();
        }
      })
      .catch(err => console.log(err));
  }

  function onLoginUser(email, password) {
    api.loginUser(email, password)
      .then((data) => {
        if (data.token) {
          api.checkUserData()
            .then((res) => {
              if (res.data) {
                setUser(res.data);
              }
            })
          closeAllPopups();
        }
      })
      .catch(err => console.log(err));
  }

  function onLogoutUser() {
    localStorage.removeItem('jwt');
    setUser({});
    closeAllPopups();
  }

  function onSaveArticle(title, text, date, source, link, image) {
    console.log(title);
    api.saveArticle(keyword, title, text, date, source, link, image)
      .then((data) => {
        console.log(data);
      })
  }

  return (
    <CurrentUserContext.Provider value={user}>
      <Route exact path="/">
        <div className="main__search">
          {isHeaderMenuOpen ? (
            <Navigation handleClose={closeAllPopups} handleLogin={onLogin} />
          ) : (
            <Header
              page="home"
              handleLogin={onLogin}
              handleLogout={onLogoutUser}
              handleMenu={onMenu}
            />
          )}

          <SearchForm handleSearch={onSearch}/>
        </div>
        {isPreloaderShown ? <Preloader /> : <></>}
        {isNotFoundShown ? <NotFound /> : <></>}
        {results.articles ? <NewsCardList page="home" results={results} handleSaveClick={onSaveArticle} /> : <> </>}
        <About />
        <Footer />
      </Route>
      <Route path="/saved-news">
        <div className="main__user">
          {isHeaderMenuOpen ? (
            <Navigation handleClose={closeAllPopups} handleLogin={onLogin} />
          ) : (
            <Header
              user="Test"
              page="news"
              handleLogin={onLogin}
              handleLogout={closeAllPopups}
              handleMenu={onMenu}
            />
          )}
        </div>
        <SavedNews />
        <NewsCardList page="news" />
        <Footer />
      </Route>
      <RegistrationPopup
        isOpen={isRegistrationPopupOpen}
        onClose={closeAllPopups}
        onLink={onLogin}
        handleRegisterUser={onRegisterUser}
      />
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onLink={onRegister}
        handleLoginUser={onLoginUser}
      />
    </CurrentUserContext.Provider>
  );
}

export default Main;
