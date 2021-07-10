import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2021 Supersite, Powered by News API</p>
      <div className="footer__links">
        <Link to="/" className="footer__links-item">Home</Link>
        <a href="https://grantwasil.com" target="_blank" rel="noreferrer" className="footer__links-item">Grant Wasil</a>
      </div>
      <div className="footer__logos">
        <a href="https://github.com/GrantWasil" target="_blank" rel="noreferrer">
          <div className="footer__links-logo footer__github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
