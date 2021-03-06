import React from 'react';
import './SavedNews.css';

function SavedNews(props) {
  const { user, articles, keywords } = props;
  console.log(keywords);
  return (
    <section className="saved container">
      <p className="saved__subtitle">Saved articles</p>
      <h3 className="saved__title">{user.name ? user.name : 'Loading'}, you have {articles.articles ? articles.articles.length : 0} saved articles</h3>
      <div className="saved__keywords">
        <p className="saved__keywords-title">By keywords:
          <span className="saved__keywords-keyword">{keywords.length >= 1 ? (
            keywords.length > 2 ? (
              `${keywords[0]}, ${keywords[1]} and ${keywords.length - 2} more.`
            ) : (
              keywords[1] ? `${keywords[0]}, ${keywords[1]}` : `${keywords[0]}`
            )
          ) : (
            'None'
          )
          }</span>
        </p>

      </div>
    </section>
  )
}

export default SavedNews;