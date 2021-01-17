import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import './Main.css';

function Main() {

  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(true);


  function onLogin() {
    setIsLoginPopupOpen(true);
    setIsRegistrationPopupOpen(false);
  }

  function onRegister() {
    setIsLoginPopupOpen(false);
    setIsRegistrationPopupOpen(true);
  }

  function closeAllPopups() {
    setIsRegistrationPopupOpen(false);
    setIsLoginPopupOpen(false);
  }

  return (
    <>
      <Route exact path="/">
        <div className="main__search">
          <Header page="home" />
          <SearchForm />
        </div>
        <NewsCardList />
        <About />
        <Footer />
      </Route>
      <Route path="/saved-news">
        <div className="main__user">
          <Header user="Test" page="news" />
        </div>
      </Route>
      <RegistrationPopup isOpen={isRegistrationPopupOpen} onClose={closeAllPopups} onLink={onLogin}/>
    </>
  );
}

export default Main;
