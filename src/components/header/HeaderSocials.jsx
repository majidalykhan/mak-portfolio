import React from "react";

import { images } from "../../constants";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="" target="_blank" className="social-btn">
        <img src={images.linkedin}></img>
      </a>
      <a href="" target="_blank" className="social-btn">
        <img className="social-icons" src={images.github}></img>
      </a>
    </div>
  );
};

export default HeaderSocials;
