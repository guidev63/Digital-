import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../assets/Logo.png"; // Ajuste o caminho conforme necessário Sua Logo...

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="logo">
          <img src={logo} alt="Logo"/>
        </h3>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li>Quem Somos </li>
          </Link>
          <Link to="/services">
            {" "}
            <li>Serviços</li>
          </Link>
          <Link to="/skills">
            {" "}
            <li>Galeria de Fotos </li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
