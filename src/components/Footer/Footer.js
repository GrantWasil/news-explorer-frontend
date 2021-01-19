import React from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from '../../images/github.svg';
import FacebookLogo from '../../images/facebook.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__links">
        <Link to="/" className="footer__links-item">Home</Link>
        <a href="practicum.com" className="footer__links-item">Practicum by Yandex</a>
        <img src={GithubLogo} className="footer__links-logo" alt="Github" />
        <img src={FacebookLogo} className="footer__links-logo" alt="Facebook" />
      </div>
    </div>
  );
}

export default Footer;
