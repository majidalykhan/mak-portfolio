import React from "react";

import "./about.css";
import { images } from "../../constants/";
import { FiAward, FiUsers, FiFolder } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={images.profileImage} alt="About Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward />
              <h2>Experience</h2>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers />
              <h2>Clients</h2>
              <small>Worldwide</small>
            </article>
            <article className="about__card">
              <FiFolder />
              <h2>Projects</h2>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            Creative and adaptable young computer science graduate with lifelong
            learning interests. I'm fairly strong-willed and energetic when it
            comes to hardwork and solving problems. I believe in learning for
            continuous personal and professional development. I'm always eager
            to find opportunities that help me grow and get exposure.
          </p>
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
