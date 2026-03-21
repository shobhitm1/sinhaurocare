import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import YoutubeSection from "./pages/YoutubeSection";
import WhatsAppButton from "./components/WhatsAppButton";
import SurgeryGallery from "./pages/SurgeryGallery";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      <Home language={language} />
      <Services language={language} />
      <About language={language} />
      <SurgeryGallery language={language} />
      <YoutubeSection language={language} />
      <Footer language={language} />

      <WhatsAppButton />
    </>
  );
}

export default App;