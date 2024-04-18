import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-container">
        <div className="logo">
          <h1>L O U V R E</h1>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#home">Anasayfa</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Hakkımızda</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
