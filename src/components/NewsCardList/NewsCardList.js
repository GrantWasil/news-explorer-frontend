import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const data = require('../../utils/data.json');

function NewsCardList() {
  return (
    <section className="results">
      <div className="container">
        <h2 className="results__title">Search results</h2>
        <div className="results__cards">
          {
            // eslint-disable-next-line array-callback-return
            data.cards.map((card, i) => (
              <NewsCard
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                image={card.image}
                alt={card.alt}
                date={card.date}
                title={card.title}
                text={card.text}
                source={card.source}
              />
            ))
          }
        </div>
        <button className="results__more" type="submit">Show more</button>
      </div>
    </section>
  );
}

export default NewsCardList;
