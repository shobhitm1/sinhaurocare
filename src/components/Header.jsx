import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

function Header({ darkMode, setDarkMode, language, setLanguage }) {

  const text = {
    en: {
      tagline: "Advanced Urology Care",
      doctor: "By Dr. Somit Kumar Sinha",
      home: "Home",
      specialisations: "Specialisations",
      about: "About",
      contact: "Contact",
      light: "☀ Light",
      dark: "🌙 Dark",
      langBtn: "हिंदी"
    },
    hi: {
      tagline: "उन्नत मूत्ररोग उपचार",
      doctor: "डॉ. सोमित कुमार सिन्हा द्वारा",
      home: "मुख्य पृष्ठ",
      specialisations: "विशेषताएँ",
      about: "परिचय",
      contact: "संपर्क करें",
      light: "☀ लाइट",
      dark: "🌙 डार्क",
      langBtn: "English"
    }
  };

  const t = text[language];

  return (
    <header className="navbar">
      <div className="container nav-container">

        <div className="logo-wrapper">
          <img src={logo} alt="Sinha Urocare" className="logo-img" />
          <div className="logo-text">
            <h1>Sinha Urocare</h1>
            <p>{t.tagline}</p>
            <p className="doctor-name">{t.doctor}</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="/">{t.home}</a>
          <a href="#specializations">{t.specialisations}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        {/* TOGGLES */}
        <div className="toggle-wrapper">
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? t.light : t.dark}
          </button>

          <button
            className="toggle-btn"
            onClick={() =>
              setLanguage(language === "en" ? "hi" : "en")
            }
          >
            {t.langBtn}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;