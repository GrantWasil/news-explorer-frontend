import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  const { page, user, results, handleSaveClick, handleDeleteClick } = props;
  const [shownResults, setShownResults] = React.useState({});
  const [showMore, setShowMore] = React.useState(true);
  const [shownAmount, setShownAmount] = React.useState(3);

  React.useEffect(() => {
    if (page === "home") {
      setShownResults(results.articles.slice(0, shownAmount));
      if (shownAmount >= results.articles.length) {
        setShowMore(false);
      }
    } else {
      setShownResults(results.articles);
    }
    console.log(results);
  }, [shownAmount, results.articles]);

  function onShowMore(e) {
    e.preventDefault();
    setShownAmount(shownAmount + 3);
    setShownResults(results.articles.slice(0, shownAmount));
    if (shownAmount >= results.articles.length) {
      setShowMore(false);
    }
  }

  return (
    <section className="results">
      {shownResults && (
        <>
          {page === "home" ? (
            <div className="container">
              <h2 className="results__title">Search results</h2>
              <ul className="results__cards">
                {shownResults.length > 0 && shownResults.map((card, i) => (
                  <NewsCard
                    key={i}
                    image={card.urlToImage}
                    alt={card.alt}
                    date={card.publishedAt}
                    title={card.title}
                    text={card.description}
                    source={card.source.name}
                    keyword={card.keyword}
                    link={card.url}
                    page={page}
                    user={user}
                    handleClick={handleSaveClick}
                  />
                ))}
              </ul>
              {showMore ? (
                <button
                  className="results__more"
                  type="submit"
                  onClick={onShowMore}
                >
                  Show more
                </button>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="container">
              <ul className="results__cards">
                {shownResults.length > 0 && shownResults.map((card, i) => (
                  <NewsCard
                    key={i}
                    id={card._id}
                    image={card.image}
                    alt={card.alt}
                    date={card.date}
                    title={card.title}
                    text={card.text}
                    source={card.source}
                    keyword={card.keyword}
                    link={card.link}
                    page={page}
                    user={user}
                    handleClick={handleDeleteClick}
                  />
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default NewsCardList;
