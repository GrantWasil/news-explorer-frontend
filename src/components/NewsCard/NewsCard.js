import React from "react";
import "./NewsCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function NewsCard(props) {
  const [isStatusShown, setIsStatusShown] = React.useState(false);
  const {
    id,
    image,
    alt,
    date,
    title,
    text,
    source,
    keyword,
    link,
    page,
    handleClick,
  } = props;
  const user = React.useContext(CurrentUserContext);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fixedDate = new Date(date);
  const formattedDate = `${
    months[fixedDate.getMonth()]
  } ${fixedDate.getDate()}, ${fixedDate.getFullYear()}`;

  function onSaveClick(e) {
    e.preventDefault();
    handleClick(e, title, text, date, source, link, image, cb);
    function cb(e) {
      e.target.className = 'card__img-save_saved ' + e.target.className;
    }
  }

  function onDeleteClick(e) {
    e.preventDefault();
    handleClick(id);
  }

  function handleButtonHover() {
    if (!user.name || page === "news" ) {
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
        <a href={link} target="_blank" rel="noreferrer" className="card__link">
          <img className="card__img-image" src={image} alt={alt} />
        </a>
        {page === "news" ? (
          <>
            <p className="card__img-keyword">{keyword}</p>
            <p
              className={
                isStatusShown
                  ? "card__img-status card__img-status_shown"
                  : "card__img-status"
              }
            >
              Remove from saved
            </p>
            <div
              className="card__img-delete"
              type="submit"
              aria-label="Delete"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={onDeleteClick}
            />
          </>
        ) : (
          <>
            <p
              className={
                isStatusShown
                  ? "card__img-status card__img-status_shown"
                  : "card__img-status"
              }
            >
              Sign in to save articles
            </p>
            <div
              className="card__img-save"
              type="submit"
              aria-label="Save"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={onSaveClick}
            />
          </>
        )}
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="card__link">
        <div className="card__info">
          <p className="card__info-date">{formattedDate}</p>
          <h3 className="card__info-title">{title}</h3>
          <p className="card__info-text">{text}</p>
          <p className="card__info-source">{source}</p>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
