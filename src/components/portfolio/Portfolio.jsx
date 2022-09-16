import React from "react";
import "./portfolio.css";

import { data } from "./portfolioData";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolios">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <div key={id}>
              <div class="portfolio-item">
                <div class="image">
                  <img src={image} alt=""></img>
                </div>
                <div class="hover-items">
                  <h3>{title}</h3>
                  <div class="icons">
                    <a href={github} class="icon">
                      <AiFillLinkedin />
                    </a>
                    <a href={demo} class="icon">
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
