import React from 'react';
import abc from '../assets/abc.jpg'; // Adjust the path as necessary
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="hero">
        <img src={abc} alt='IMGGG' />
        <div className="hero-content">
          <h1>NARAYANA REDDY NARU</h1>
          <p>AVILA UNIVERSITY</p>
          <p>COMPUTER SCIENCE</p>
        </div>
      </section>

      <section className="description">
        <h2>About Me</h2>
        <p>I aspire to secure a position of responsibility in a company that values creativity, expertise, and experience and where I can contribute to the success of that company while also having the opportunity to hone my own set of abilities. 😎</p>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: narayana01704@gmail.com</p>
        <p>Phone: 475-326-9323</p>
      </section>
    </div>
  );
}

export default About;
