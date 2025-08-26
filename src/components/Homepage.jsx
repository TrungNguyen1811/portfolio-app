import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">Frontend Developer & UI/UX Enthusiast</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View Projects</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
      </header>
      
      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a passionate developer who loves creating beautiful and functional web experiences. 
             With expertise in React, JavaScript, and modern web technologies.</p>
        </div>
      </section>
      
      <section className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS, SCSS</p>
            </div>
            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, Vite, Webpack, npm</p>
            </div>
            <div className="skill-card">
              <h3>Design</h3>
              <p>UI/UX, Responsive Design, Figma</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
