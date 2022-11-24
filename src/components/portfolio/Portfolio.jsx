import React, { useState } from "react";
import "./portfolio.css";

import { data } from "./portfolioData";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  const [projectType, setProjecType] = useState("");
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedProject, setSelectedProject] = useState(null);

  // const expandModal = (item) => {
  //   setSelectedProject(item);
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setSelectedProject(null);
  //   setModalIsOpen(false);
  // };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <ul className="portfolio-flters">
          <li onClick={() => setProjecType("")}>All</li>
          <li onClick={() => setProjecType("ar")}>Augmented Reality</li>
          <li onClick={() => setProjecType("mobile")}>Mobile</li>
          <li onClick={() => setProjecType("web")}>Web</li>
        </ul>
      </div>

      <div className="portfolios">
        {data
          .filter((project) => {
            if (projectType === "") {
              return true;
            }
            return project.projectType === projectType;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <div class="portfolio-item">
                  <div class="image">
                    <img src={item.image} alt=""></img>
                  </div>
                  <div class="hover-items">
                    <h3>{item.title}</h3>
                    <div class="icons">
                      <a
                        href={item.github}
                        class="icon"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillGithub className="social-icon" />
                      </a>
                      {/* To Add details button later */}
                      {/* <a class="icon" onClick={() => expandModal(item)}>
                        <CgDetailsMore className="social-icon" />
                      </a> */}
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
