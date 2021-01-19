import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import SavedNews from '../SavedNews/SavedNews';
import Navigation from '../Navigation/Navigation';
import './Main.css';

function Main() {

  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);


  function onLogin() {
    setIsLoginPopupOpen(true);
    setIsHeaderMenuOpen(false);
    setIsRegistrationPopupOpen(false);
  }

  function onRegister() {
    setIsLoginPopupOpen(false);
    setIsRegistrationPopupOpen(true);
  }

  function onMenu(){
    setIsHeaderMenuOpen(true);
  }

  function closeAllPopups() {
    setIsRegistrationPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsHeaderMenuOpen(false);
  }

  return (
    <>
      <Route exact path="/">
        <div className="main__search">
          {isHeaderMenuOpen
            ? <Navigation handleClose={closeAllPopups} handleLogin={onLogin} />
            : <Header page="home" handleLogin={onLogin} handleLogout={closeAllPopups} handleMenu={onMenu} />
          }

          <SearchForm />
        </div>
        <NewsCardList page="home" />
        <About />
        <Footer />
      </Route>
      <Route path="/saved-news">
        <div className="main__user">
          {isHeaderMenuOpen
            ? <Navigation handleClose={closeAllPopups} handleLogin={onLogin} />
            : <Header user="Test" page="news" handleLogin={onLogin} handleLogout={closeAllPopups} handleMenu={onMenu} />
          }
        </div>
        <SavedNews />
        <NewsCardList page="news" />
        <Footer />
      </Route>
      <RegistrationPopup isOpen={isRegistrationPopupOpen} onClose={closeAllPopups} onLink={onLogin}/>
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeAllPopups} onLink={onRegister} />
    </>
  );
}

export default Main;
