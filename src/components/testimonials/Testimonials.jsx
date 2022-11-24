/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./testimonials.css";

import { data } from "./testimonialsData";
import { AiOutlineLeft, AiOutlineRight, AiOutlineUser } from "react-icons/ai";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, country, review } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <AiOutlineUser />
          </div>
          <h4 className="client__name">{name}</h4>
          <h5 className="client__country">{country}</h5>
          <p className="client__review">{review}</p>
          <p className="platform">-- fiverr</p>
          <a onClick={prevPerson}>
            <AiOutlineLeft className="left" />
          </a>
          <a onClick={nextPerson}>
            <AiOutlineRight className="right" />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
