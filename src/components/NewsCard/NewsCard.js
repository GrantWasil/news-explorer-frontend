import React from 'react';

function NewsCard(props) {
  const {
    image,
    alt,
    date,
    title,
    text,
    source,
  } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img className="card__img-image" src={image} alt={alt} />
        <p className="card__img-status" />
        <button className="card__img-save" type="submit">test</button>
      </div>
      <div className="card__info">
        <p className="card__info-date">{date}</p>
        <h3 className="card__info-title">{title}</h3>
        <p className="card__info-text">{text}</p>
        <p className="card__info-source">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
