import React from "react";
import { resume } from "../../constants/";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume.resume} className="btn" download /*Link to cv*/>
        Download Resume
      </a>
      <a href="#contact" className="btn-secondary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
