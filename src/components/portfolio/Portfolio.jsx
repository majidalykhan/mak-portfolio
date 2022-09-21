import React, { useState } from "react";
import "./portfolio.css";
import Modal from "react-modal";

import { data } from "./portfolioData";
import { AiFillGithub } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";

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
                      <a href={item.github} class="icon" target="_blank">
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
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="My dialog"
        className="modal"
      >
        <div className="modal-content">
          <h2>{selectedProject && selectedProject.title}</h2>
          <p>{selectedProject && selectedProject.description}</p>
          <div className="portfolio-images">
            {selectedProject &&
              selectedProject.portfolio_images.map((image) => {
                return <img src={image}></img>;
              })}
          </div>
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal> */}
    </section>
  );
};

export default Portfolio;
