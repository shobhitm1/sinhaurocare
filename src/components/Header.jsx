import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

function Header({ darkMode, setDarkMode, language, setLanguage }) {

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* 🔥 LOGO CLICKABLE */}
        <a
          href="https://linktr.ee/sinhaurocare"  // 👉 apna linktree yaha daal dena
          target="_blank"
          rel="noopener noreferrer"
          className="logo-wrapper"
        >
          <img src={logo} alt="Sinha Urocare" className="logo-img" />

          <div className="logo-text">
            <h1>Sinha Urocare</h1>
            <p>Advanced Urology Care</p>
            <p className="doctor-name">By Dr. Somit Kumar Sinha</p>
          </div>
        </a>

        <nav className="nav-links">
  <a href="#home">
    {language === "en" ? "Home" : "होम"}
  </a>

  <a href="#specializations">
    {language === "en" ? "Specialisations" : "विशेषताएँ"}
  </a>

  <a href="#about">
    {language === "en" ? "About" : "हमारे बारे में"}
  </a>

  <a href="#contact">
    {language === "en" ? "Contact" : "संपर्क करें"}
  </a>
</nav>

        {/* TOGGLES */}
        <div className="toggle-wrapper">
          
          {/* DARK MODE */}
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* LANGUAGE */}
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