import React from "react";
import "./Home.css";
import doctor from "../assets/doctor.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Home({ language }) {

  const whatsappMessage =
    "Hello Sinha Uro Care, I would like to take an appointment with the doctor.";

  const whatsappLink = (lang) =>
    lang === "en"
      ? `https://wa.me/919473821013?text=${encodeURIComponent(whatsappMessage)}`
      : `https://wa.me/919473821013?text=${encodeURIComponent(
          "नमस्ते सिन्हा यूरो केयर, मुझे डॉक्टर से अपॉइंटमेंट लेनी है।"
        )}`;

  const reviews = [
    {
      name: "Ravi Kumar",
      rating: 5,
      text: "Dr. Sinha provided exceptional care. The entire experience was smooth and highly professional."
    },
    {
      name: "Neha Sharma",
      rating: 5,
      text: "Very experienced and patient-friendly doctor. Highly recommended!"
    },
    {
      name: "Amit Singh",
      rating: 5,
      text: "Best urologist in Gorakhpur. Excellent diagnosis and treatment."
    },
    {
      name: "Pooja Verma",
      rating: 5,
      text: "Modern facilities and compassionate care. Truly satisfied."
    },
    {
      name: "Manish Tiwari",
      rating: 5,
      text: "Five-star experience! Clear explanation and great results."
    }
  ];

  const specializations = [
    {
      title: language === "en" ? "Endourology" : "एंडोयूरोलॉजी",
      desc:
        language === "en"
          ? "Minimally invasive treatment for kidney and ureteric stones using advanced endoscopic and laser techniques."
          : "किडनी और यूरेटर स्टोन के लिए आधुनिक एंडोस्कोपिक और लेजर तकनीक द्वारा न्यूनतम चीरा उपचार।"
    },
    {
      title: language === "en" ? "Andrology" : "एंड्रोलॉजी",
      desc:
        language === "en"
          ? "Specialized management of male infertility and reproductive health."
          : "पुरुष बांझपन और प्रजनन स्वास्थ्य का विशेषज्ञ उपचार।"
    },
    {
      title: language === "en" ? "Pediatric Urology" : "बाल मूत्ररोग",
      desc:
        language === "en"
          ? "Expert care for urological conditions in infants and children."
          : "शिशुओं और बच्चों में मूत्र संबंधी रोगों का विशेषज्ञ उपचार।"
    },
    {
      title: language === "en" ? "Uro Oncology" : "यूरो ऑन्कोलॉजी",
      desc:
        language === "en"
          ? "Comprehensive treatment for kidney, bladder and prostate cancers."
          : "किडनी, ब्लैडर और प्रोस्टेट कैंसर का उन्नत उपचार।"
    },
    {
      title: language === "en" ? "Uro Gynecology" : "यूरो गायनेकोलॉजी",
      desc:
        language === "en"
          ? "Advanced care for female urinary issues and pelvic disorders."
          : "महिलाओं में मूत्र समस्याओं और पेल्विक विकारों का उन्नत उपचार।"
    }
  ];

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-wrapper">

          <div className="hero-left">
            <h1>
              {language === "en" ? (
                <>
                  Advanced <span>Urology Care</span><br />
                  You Can Trust
                </>
              ) : (
                <>
                  उन्नत <span>मूत्ररोग उपचार</span><br />
                  जिस पर आप भरोसा कर सकें
                </>
              )}
            </h1>

            <p>
              {language === "en"
                ? "Specialized treatment for kidney stones, prostate issues, UTI and other urological conditions with modern technology and compassionate care."
                : "किडनी स्टोन, प्रोस्टेट समस्या, यूरिन इन्फेक्शन और अन्य मूत्ररोग रोगों का आधुनिक तकनीक और संवेदनशील देखभाल के साथ उपचार।"}
            </p>

            <div className="hero-buttons">

              {/* 🔥 WHATSAPP BUTTON FIX */}
              <a
                href={whatsappLink(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {language === "en"
                  ? "Book Appointment"
                  : "अपॉइंटमेंट बुक करें"}
              </a>

              <a href="#services" className="btn-outline">
                {language === "en" ? "Our Services" : "हमारी सेवाएं"}
              </a>

            </div>

            <div className="hero-stats">
              <div>
                <h3>10,000+</h3>
                <p>{language === "en" ? "Patients Treated" : "उपचारित मरीज"}</p>
              </div>

              <div>
                <h3>15</h3>
                <p>{language === "en" ? "Years Experience" : "वर्षों का अनुभव"}</p>
              </div>

              <div>
                <h3>2500+</h3>
                <p>{language === "en" ? "Successful Surgeries" : "सफल सर्जरी"}</p>
              </div>
            </div>
          </div>

          {/* DOCTOR */}
          <div className="hero-right">
            <div className="doctor-card">
              <img src={doctor} alt="Doctor" className="doctor-img" />

              <div className="doctor-overlay">
                <h3>Dr. Somit Kumar Sinha</h3>
                <p>M.Ch Urology Specialist</p>
                <p>15 Years Experience</p>
                <p>
                  {language === "en"
                    ? "Expert in Advanced Urological Care"
                    : "उन्नत मूत्ररोग उपचार विशेषज्ञ"}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section id="specializations" className="services-section">
        <div className="container">
          <h2 className="section-title">
            {language === "en" ? "Our Specializations" : "हमारी विशेषज्ञताएँ"}
          </h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {specializations.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">
            {language === "en" ? "Patient Testimonials" : "मरीजों की प्रतिक्रिया"}
          </h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <p className="testimonial-text">“{review.text}”</p>

                  <div className="testimonial-meta">
                    <span className="testimonial-name">{review.name}</span>
                    <span className="testimonial-stars">
                      {"⭐".repeat(review.rating)}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="google-reviews-link">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJRx6oFXBFkTkRAuX_7J81ogg"
              target="_blank"
              rel="noopener noreferrer"
              className="google-btn"
            >
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="text">
                {language === "en"
                  ? "View All Reviews on Google"
                  : "सभी गूगल रिव्यू देखें"}
              </span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;