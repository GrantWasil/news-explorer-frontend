import React from 'react';
import './SavedNews.css';

function SavedNews(props) {
  return (
    <section className="saved container">
      <p className="saved__subtitle">Saved articles</p>
      <h3 className="saved__title">Elise, you have 5 saved articles</h3>
      <div className="saved__keywords">
        <p className="saved__keywords-title">By keywords: </p>
        <p className="saved__keywords-keyword">Nature, </p>
        <p className="saved__keywords-keyword">Yellowstone, </p>
        <p className="saved__keywords-keyword">and 2 other</p>
      </div>
    </section>
  )
}

export default SavedNews;