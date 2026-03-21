import React, { useState } from "react";
import "./SurgeryGallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import s1 from "../assets/surgery1.jpeg";
import s2 from "../assets/surgery2.jpeg";
import s3 from "../assets/surgery3.jpeg";
import s4 from "../assets/surgery4.jpeg";

function SurgeryGallery({ language }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const text = {
    en: {
      title: "Surgery Highlights",
      alt: "Surgery image"
    },
    hi: {
      title: "सर्जरी की झलकियाँ",
      alt: "सर्जरी की तस्वीर"
    }
  };

  const t = text[language];

  const images = [s1, s2, s3, s4];

  return (
    <section className="surgery-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        {/* SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${t.alt} ${index + 1}`}
                className="surgery-img"
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MODAL (ZOOM) */}
        {selectedImage && (
          <div
            className="image-modal"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="preview" />
          </div>
        )}
      </div>
    </section>
  );
}

export default SurgeryGallery;