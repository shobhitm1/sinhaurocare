import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

function Header({ darkMode, setDarkMode, language, setLanguage }) {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <div className="logo-wrapper">
          <img src={logo} alt="Sinha Urocare" className="logo-img" />
          <div className="logo-text">
            <h1>Sinha Urocare</h1>
            <p>Advanced Urology Care</p>
            <p className="doctor-name">By Dr. Somit Kumar Sinha</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#specializations">Specialisations</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* TOGGLES */}
        <div className="toggle-wrapper">
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          <button
            className="toggle-btn"
            onClick={() =>
              setLanguage(language === "en" ? "hi" : "en")
            }
          >
            {language === "en" ? "हिंदी" : "English"}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;