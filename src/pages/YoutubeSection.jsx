import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function YoutubeSection({ language }) {

  const videos = [
    "cXET-ioEDLA",
    "R0uYUFg0qxA",
    "fWss7U6i05Y",
    "QIha7ckFuRE",
    "18Vpjjk1zhc",
    "YPFEchwkyDU"
  ];

  return (
    <section id="youtube" className="section">
      <div className="container">

        <h2 className="section-title">
          {language === "en"
            ? "Follow Us on YouTube"
            : "हमारे यूट्यूब चैनल को फॉलो करें"}
        </h2>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {videos.map((id, index) => (
            <SwiperSlide key={index}>
              <div className="youtube-card">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="youtube-channel-link">
          <a
            href="https://www.youtube.com/@sinhaurocare"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            ▶{" "}
            {language === "en"
              ? "Visit Our YouTube Channel"
              : "हमारा यूट्यूब चैनल देखें"}
          </a>
        </div>

      </div>
    </section>
  );
}