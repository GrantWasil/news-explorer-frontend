import React from 'react';
import './NewsCard.css';
import testCard from '../../images/card1.png';

function NewsCard(props) {
  const {
    alt,
    date,
    title,
    text,
    source,
  } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img className="card__img-image" src={testCard} alt={alt} />
        <p className="card__img-status" />
        <button className="card__img-save" type="submit" aria-label="Save" />
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
