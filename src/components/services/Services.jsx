import React from "react";
import "./services.css";

import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Design to development.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Provide Android/iOS app services.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Focused on delivering precise apps.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Augmented Reality</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Development of augmented reality applications using Google AR
                Core, Unity and Vuforia.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                App features Image tracking, Try-on Face filters, AR Measurement
                and Video AR.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web development */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Like to code things from scratch.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>enjoy bringing ideas to life in the browser.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
