import React from "react";
import "./portfolio.css";

import { images } from "../../constants/";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.portfolio1} alt="portfolio" />
            <h3>Project 1</h3>
            <div className="portfolio__item-cta">
              <a
                href="www.github.com/majidalykhan"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="www.github.com/majidalykhan"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.portfolio2} alt="portfolio" />
            <h3>Project 2</h3>
            <div className="portfolio__item-cta">
              <a
                href="www.github.com/majidalykhan"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="www.github.com/majidalykhan"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.portfolio3} alt="portfolio" />
            <h3>Project 3</h3>
            <div className="portfolio__item-cta">
              <a
                href="www.github.com/majidalykhan"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="www.github.com/majidalykhan"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.portfolio4} alt="portfolio" />
            <h3>Project 4</h3>
            <div className="portfolio__item-cta">
              <a
                href="www.github.com/majidalykhan"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="www.github.com/majidalykhan"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.portfolio5} alt="portfolio" />
            <h3>Project 5</h3>
            <div className="portfolio__item-cta">
              <a
                href="www.github.com/majidalykhan"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="www.github.com/majidalykhan"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={images.portfolio6} alt="portfolio" />
            <h3>Project 6</h3>
            <div className="portfolio__item-cta">
              <a
                href="www.github.com/majidalykhan"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="www.github.com/majidalykhan"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
