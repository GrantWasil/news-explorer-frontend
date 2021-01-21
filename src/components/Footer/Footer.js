import React from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from '../../images/github.svg';
import FacebookLogo from '../../images/facebook.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__links">
        <Link to="/" className="footer__links-item">Home</Link>
        <a href="https://practicum.yandex.com" target="_blank" rel="noreferrer" className="footer__links-item">Practicum by Yandex</a>
        <a href="https://github.com/GrantWasil" target="_blank" rel="noreferrer">
          <img src={GithubLogo} className="footer__links-logo" alt="Github" />
        </a>
        <a href="https://www.facebook.com/YPracticum/" target="_blank" rel="noreferrer">
          <img src={FacebookLogo} className="footer__links-logo" alt="Facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
