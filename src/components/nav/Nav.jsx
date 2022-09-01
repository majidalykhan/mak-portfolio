import React from "react";
import "./nav.css";
import { useState } from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import {
  MdOutlineMiscellaneousServices,
  MdOutlineContacts,
} from "react-icons/md";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav id="navbar">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookOpen />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdOutlineMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineContacts />
      </a>
    </nav>
  );
};

export default Navbar;
