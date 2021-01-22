import React from 'react';
import './NewsCard.css';
import testCard from '../../images/card1.jpg';

function NewsCard(props) {
  const [isStatusShown, setIsStatusShown] = React.useState(false);
  const {
    alt,
    date,
    title,
    text,
    source,
    keyword,
    page,
    user
  } = props;

  function handleButtonHover() {
    if (!user) {
      setIsStatusShown(true);
    }
    return;
  }

  function handleButtonLeave() {
    setIsStatusShown(false);
  }

  return (
    <div className="card">
      <div className="card__img">
        <img className="card__img-image" src={testCard} alt={alt} />
        {
          page === "news"
            ?
            <>
              <p className="card__img-keyword">{keyword}</p>
              <p className={isStatusShown ? "card__img-status card__img-status_shown" : "card__img-status"}>Remove from saved</p>
              <div className="card__img-delete" type="submit" aria-label="Delete" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} />
            </>
            :
            <>
              <p className={isStatusShown ? "card__img-status card__img-status_shown" : "card__img-status"}>Sign in to save articles</p>
              <div className="card__img-save" type="submit" aria-label="Save" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} />
            </>
        }
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
