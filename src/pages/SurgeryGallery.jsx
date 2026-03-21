import React from "react";
import "./SurgeryGallery.css";

import img1 from "../assets/surgery1.jpeg";
import img2 from "../assets/surgery2.jpeg";
import img3 from "../assets/surgery3.jpeg";
import img4 from "../assets/surgery4.jpeg";

function SurgeryGallery({ language }) {

  const images = [img1, img2, img3, img4];

  return (
    <section className="surgery-section">
      <div className="container">

        <h2 className="section-title">
          {language === "en"
            ? "Our Surgical Expertise"
            : "हमारी सर्जिकल विशेषज्ञता"}
        </h2>

        <div className="slider">

          <div className="slide-track">
            {images.map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt="Surgery" />
              </div>
            ))}

            {/* duplicate for smooth infinite loop */}
            {images.map((img, index) => (
              <div className="slide" key={`dup-${index}`}>
                <img src={img} alt="Surgery" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default SurgeryGallery;