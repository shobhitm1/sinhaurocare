import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaGoogle, FaWhatsapp } from "react-icons/fa";

function Footer({ language }) {

  const phoneNumber = "919473821013";

  const message =
    language === "en"
      ? "Hello, I would like to book an appointment at Sinha Urocare."
      : "नमस्ते, मैं सिन्हा यूरोकेयर में अपॉइंटमेंट बुक करना चाहता/चाहती हूँ।";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        {/* Column 1 - About + Social */}
        <div className="footer-column">
          <h3>Sinha Urocare</h3>

          <p>
            {language === "en"
              ? "Sinha Urocare is a leading urology clinic in Gorakhpur, offering advanced diagnosis and treatment for kidney stones, prostate enlargement (BPH), urinary tract infections (UTI), male infertility, and bladder & kidney tumors. Led by Dr. Somit Kumar Sinha (M.Ch Urology), we combine modern technology, surgical precision, and compassionate patient care to deliver trusted urological solutions."
              : "सिन्हा यूरोकेयर गोरखपुर की एक अग्रणी मूत्ररोग क्लिनिक है, जहाँ किडनी स्टोन, प्रोस्टेट बढ़ना (BPH), यूरिन इन्फेक्शन (UTI), पुरुष बांझपन तथा ब्लैडर एवं किडनी ट्यूमर का आधुनिक उपचार उपलब्ध है। डॉ. सोमित कुमार सिन्हा (M.Ch Urology) के नेतृत्व में हम आधुनिक तकनीक, सर्जिकल दक्षता और संवेदनशील देखभाल के साथ विश्वसनीय उपचार प्रदान करते हैं।"}
          </p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/sinha_urocare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@sinhaurocare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.google.com/search?kgmid=/g/11zkmhpg81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-column">
          <h3>
            {language === "en" ? "Quick Links" : "त्वरित लिंक"}
          </h3>

          <ul>
            <li>
              <a href="#home">
                {language === "en" ? "Home" : "होम"}
              </a>
            </li>

            <li>
              <a href="#services">
                {language === "en" ? "Services" : "सेवाएं"}
              </a>
            </li>

            <li>
              <a href="#about">
                {language === "en" ? "About" : "परिचय"}
              </a>
            </li>

            <li>
              <a href="#testimonials">
                {language === "en" ? "Testimonials" : "प्रतिक्रिया"}
              </a>
            </li>

            <li>
              <a href="#youtube">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact + Map */}
        <div className="footer-column">
          <h3>
            {language === "en" ? "Contact Us" : "संपर्क करें"}
          </h3>

          <p>
            Lower Ground Floor, Kanchanpur Tower,<br />
            Mohaddipur, Gorakhpur,<br />
            Uttar Pradesh 273008
          </p>

          <p>
            {language === "en" ? "Phone:" : "फोन:"}{" "}
            <a href="tel:+919473821013" className="footer-link">
              +91-9473821013
            </a>
          </p>

          <p>
            {language === "en" ? "Email:" : "ईमेल:"}{" "}
            <a
              href="mailto:sinhaurocare@gmail.com"
              className="footer-link"
            >
              sinhaurocare@gmail.com
            </a>
          </p>

          <div className="map-container">
            <iframe
              title="Sinha Urocare Location"
              src="https://www.google.com/maps?q=Sinha%20Urocare%20Gorakhpur&output=embed"
              width="100%"
              height="180"
              style={{
                border: 0,
                borderRadius: "10px",
                marginTop: "15px"
              }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sinha Urocare.{" "}
        {language === "en"
          ? "All Rights Reserved."
          : "सर्वाधिकार सुरक्षित।"}
      </div>
    </footer>
  );
}

export default Footer;