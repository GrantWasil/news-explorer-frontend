import React from 'react';
import './About.css';
import Avatar from '../../images/avatar.png';

function About() {
  return (
    <section className="about container">
      <img className="about__image" alt="Grant Wasil" src={Avatar} />
      <div className="about__info">
        <h2 className="about__info-title">About the author</h2>
        <p className="about__info-text">Hey, I'm Grant Wasil and I'm a Full Stack Web Developer with two certificates in Web Development, AWS Implementation experience, and a passion for solving creative problems. </p>
        <p className="about__info-text">I love spending my time developing new web applications, and I'd love to assist with your next project! Feel free to <a className="about__info-link" href="mailto:dev@grantwasil.com">email me</a> to discuss your ideas</p>
      </div>
    </section>
  );
}

export default About;
