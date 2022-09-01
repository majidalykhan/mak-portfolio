import React from "react";
import "./header.css";

import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div class="content">
          <h2>Majid Ali Khan</h2>
          <h2>Majid Ali Khan</h2>
        </div>
        <p>Software Engineer</p>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
