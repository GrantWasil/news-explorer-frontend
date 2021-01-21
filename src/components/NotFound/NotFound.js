import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__img" />
      <h3 className="notfound__title">Nothing found</h3>
      <p className="notfound__text">Sorry, but nothing matched your search terms.</p>
    </section>
  )
}

export default NotFound;
