import React from "react";
import "./header.css";

import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocials";
import { images } from "../../constants";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Majid Ali Khan</h1>
        <h5 className="text-dark">Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={images.profileImage} alt="me"></img>
        </div>

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
