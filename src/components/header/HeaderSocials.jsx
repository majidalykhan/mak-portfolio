import React from "react";
import { images } from "../../constants/";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/majidalykhan/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={images.linkedin} className="header_socials-img" alt="" />
        <span>Linkedin</span>
      </a>
      <a
        href="https://github.com/majidalykhan"
        target="_blank"
        rel="noreferrer"
      >
        <img src={images.github} className="header_socials-img" alt="" />
        <span>Github</span>
      </a>
      <a href="mailto:majidalykhan@gmail.com" target="_blank" rel="noreferrer">
        <img src={images.gmail} className="header_socials-img" alt="" />
        <span>Email</span>
      </a>
    </div>
  );
};

export default HeaderSocials;
