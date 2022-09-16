import React from "react";
import "./portfolio.css";

import { data } from "./portfolioData";
import { AiFillGithub } from "react-icons/ai";
import {CgDetailsMore} from 'react-icons/cg'

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
                      <AiFillGithub className="social-icon" />
                    </a>
                    <a href={demo} class="icon">
                      <CgDetailsMore className="social-icon"/>
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
