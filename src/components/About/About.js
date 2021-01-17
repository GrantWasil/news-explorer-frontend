import React from 'react';
import './About.css';
import Avatar from '../../images/avatar.jpg';

function About() {
  return (
    <div className="about container">
      <img className="about__image" alt="Grant Wasil" src={Avatar} />
      <div className="about__info">
        <h2 className="about__info-title">About the author</h2>
        <p className="about__info-text">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
        <p className="about__info-text">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
      </div>
    </div>
  );
}

export default About;
