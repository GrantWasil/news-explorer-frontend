import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search__container">
      <h1 className="search__title">What&apos;s going on in the world?</h1>
      <p className="search__subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <form className="search__form">
        <input className="search__form-input" id="search-input" placeholder="Enter topic" type="text" name="search" />
        <button className="search__submit" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
