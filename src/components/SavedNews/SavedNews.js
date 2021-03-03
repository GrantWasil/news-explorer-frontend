import React from 'react';
import './SavedNews.css';

function SavedNews(props) {
  const { user, articles } = props;
  return (
    <section className="saved container">
      <p className="saved__subtitle">Saved articles</p>
      <h3 className="saved__title">{user.name ? user.name : 'Loading'}, you have {articles.articles ? articles.articles.length : 0} saved articles</h3>
      <div className="saved__keywords">
        <p className="saved__keywords-title">By keywords:
          <span className="saved__keywords-keyword">{articles.articles && (
            articles.articles.length > 2 ? (
              `${articles.articles[0].keyword}, ${articles.articles[0].keyword} and ${articles.articles.length - 2} more.`
            ) : (
              articles.articles.map((a) => {
                return `${a.keyword} `
              })
            )
          )
          }</span>
        </p>

      </div>
    </section>
  )
}

export default SavedNews;