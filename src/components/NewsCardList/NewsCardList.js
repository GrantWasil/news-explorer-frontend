import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const data = require('../../utils/data.json');

function NewsCardList(props) {

  const { page, user } = props;

  return (
    <section className="results">
      {
        page === "home"
          ? (
            <div className="container">
              <h2 className="results__title">Search results</h2>
              <ul className="results__cards">
                {
                  data.cards.map((card, i) => (
                    <NewsCard
                      key={i}
                      image={card.image}
                      alt={card.alt}
                      date={card.date}
                      title={card.title}
                      text={card.text}
                      source={card.source}
                      keword={card.keyword}
                      page={page}
                      user={user}
                    />
                  ))
                }
              </ul>
              <button className="results__more" type="submit">Show more</button>
            </div>
          )
          : (
            <div className="container">
              <ul className="results__cards">
                {
                  data.cards.map((card, i) => (
                    <NewsCard
                      key={i}
                      image={card.image}
                      alt={card.alt}
                      date={card.date}
                      title={card.title}
                      text={card.text}
                      source={card.source}
                      keyword={card.keyword}
                      page={page}
                      user={user}
                    />
                  ))
                }
              </ul>
            </div>
          )
      }
    </section>
  );
}

export default NewsCardList;
