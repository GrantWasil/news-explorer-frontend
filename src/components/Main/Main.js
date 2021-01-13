import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';

function Main() {
  return (
    <>
      <div className="main__search">
        <Header userEmail="Grant" />
        <SearchForm />
      </div>
      <NewsCardList />
    </>
  );
}

export default Main;
