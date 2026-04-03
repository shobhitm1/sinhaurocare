import React from "react";
import "./Home.css";
import doctor from "../assets/doctor.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Home({ language }) {

  const text = {
    en: {
      // 🔥 SEO OPTIMIZED
      heroTitle1: "Advanced Urology Care in Gorakhpur",
      heroTitle2: "You Can Trust",
      heroDesc:
        "Expert urologist in Gorakhpur providing advanced treatment for kidney stones, prostate problems, UTI and other urological conditions using modern technology and patient-focused care.",

      book: "Book Appointment",
      services: "Our Services",
      patients: "Patients Treated",
      experience: "Years Experience",
      surgeries: "Successful Surgeries",
      expert: "Expert in Advanced Urology Treatments & Surgeries",
      specializations: "Our Specializations",
      testimonials: "Patient Testimonials",
      googleReviews: "View All Reviews on Google"
    },
    hi: {
      // 🔥 SEO + NATURAL HINDI
      heroTitle1: "गोरखपुर में उन्नत मूत्ररोग उपचार",
      heroTitle2: "जिस पर आप भरोसा कर सकें",
      heroDesc:
        "गोरखपुर के अनुभवी यूरोलॉजिस्ट द्वारा किडनी स्टोन, प्रोस्टेट समस्या, यूरिन इन्फेक्शन और अन्य मूत्ररोगों का आधुनिक तकनीक और मरीज-केंद्रित देखभाल के साथ उपचार।",

      book: "अपॉइंटमेंट बुक करें",
      services: "हमारी सेवाएँ",
      patients: "उपचारित मरीज",
      experience: "वर्षों का अनुभव",
      surgeries: "सफल सर्जरी",
      expert: "उन्नत मूत्ररोग उपचार एवं सर्जरी विशेषज्ञ",
      specializations: "हमारी विशेषज्ञताएँ",
      testimonials: "मरीजों के प्रशंसापत्र",
      googleReviews: "सभी गूगल रिव्यू देखें"
    }
  };

  const t = text[language];

  // 🔥 FINAL WHATSAPP FIX (NO BUG EVER)
  const handleWhatsappClick = (e) => {
    e.preventDefault();

    const message =
      language === "hi"
        ? "नमस्ते, मुझे डॉक्टर से अपॉइंटमेंट लेना है।"
        : "Hello Sinha Uro Care, I would like to take an appointment with the doctor.";

    const url = `https://wa.me/919473821013?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const reviews = [
    {
      name: "Ravi Kumar",
      rating: 5,
      text:
        language === "en"
          ? "Dr. Sinha provided exceptional care. The entire experience was smooth and highly professional."
          : "डॉ. सिन्हा ने उत्कृष्ट देखभाल प्रदान की। पूरा अनुभव बहुत सहज और पेशेवर रहा।"
    },
    {
      name: "Neha Sharma",
      rating: 5,
      text:
        language === "en"
          ? "Very experienced and patient-friendly doctor. Highly recommended!"
          : "बहुत अनुभवी और मरीजों के प्रति संवेदनशील डॉक्टर। अत्यधिक अनुशंसित!"
    },
    {
      name: "Amit Singh",
      rating: 5,
      text:
        language === "en"
          ? "Best urologist in Gorakhpur. Excellent diagnosis and treatment."
          : "गोरखपुर के बेहतरीन यूरोलॉजिस्ट। उत्कृष्ट निदान और उपचार।"
    },
    {
      name: "Pooja Verma",
      rating: 5,
      text:
        language === "en"
          ? "Modern facilities and compassionate care. Truly satisfied."
          : "आधुनिक सुविधाएँ और संवेदनशील देखभाल। पूरी तरह संतुष्ट।"
    },
    {
      name: "Manish Tiwari",
      rating: 5,
      text:
        language === "en"
          ? "Five-star experience! Clear explanation and great results."
          : "पाँच सितारा अनुभव! स्पष्ट जानकारी और बेहतरीन परिणाम।"
    }
  ];

  const specializations = [
  {
    title: language === "en" ? "Endourology" : "एंडोयूरोलॉजी",
    desc:
      language === "en"
        ? "Advanced minimally invasive procedures for kidney and urinary tract conditions, including PCNL, Mini PCNL, URS, TURP, and TURBT for effective stone and prostate management."
        : "किडनी और मूत्र मार्ग की बीमारियों के लिए उन्नत न्यूनतम चीरा तकनीकें जैसे PCNL, Mini PCNL, URS, TURP और TURBT, जिससे पथरी और प्रोस्टेट का प्रभावी उपचार किया जाता है।"
  },
  {
    title: language === "en" ? "Uro Gynecology" : "यूरो-गायनेकोलॉजी",
    desc:
      language === "en"
        ? "Specialized treatment for female urinary and pelvic disorders, including advanced surgical procedures like VVF (Vesicovaginal Fistula) repair."
        : "महिलाओं में मूत्र और पेल्विक विकारों का विशेष उपचार, जिसमें VVF (वेसिकोवैजाइनल फिस्टुला) रिपेयर जैसी उन्नत सर्जरी शामिल है।"
  },
  {
    title: language === "en" ? "Pediatric Urology" : "बाल मूत्ररोग",
    desc:
      language === "en"
        ? "Comprehensive urological care for infants and children, including hypospadias repair, VUR correction, and pyeloplasty."
        : "शिशुओं और बच्चों के लिए सम्पूर्ण मूत्र रोग उपचार, जिसमें हाइपोस्पेडियस रिपेयर, VUR करेक्शन और पायलोप्लास्टी शामिल हैं।"
  },
  {
    title: language === "en" ? "Uro Oncology" : "यूरो-ऑन्कोलॉजी",
    desc:
      language === "en"
        ? "Expert surgical management of urological cancers, including nephrectomy and cystectomy for kidney and bladder cancer treatment."
        : "किडनी और ब्लैडर कैंसर के लिए विशेषज्ञ सर्जिकल उपचार, जिसमें नेफ्रेक्टॉमी और सिस्टेक्टॉमी जैसी प्रक्रियाएं शामिल हैं।"
  },
  {
    title: language === "en" ? "Andrology" : "एंड्रोलॉजी",
    desc:
      language === "en"
        ? "Specialized care for male reproductive health and infertility, including advanced procedures like varicocele repair."
        : "पुरुष प्रजनन स्वास्थ्य और बांझपन के लिए विशेष उपचार, जिसमें वैरिकोसील रिपेयर जैसी उन्नत प्रक्रियाएं शामिल हैं।"
  }
];

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-wrapper">

          <div className="hero-left">
            <h1>
              {t.heroTitle1} <br />
              {t.heroTitle2}
            </h1>

            <p>{t.heroDesc}</p>

            <div className="hero-buttons">
              <a href="#" onClick={handleWhatsappClick} className="btn-primary">
                {t.book}
              </a>

              <a href="#specializations" className="btn-outline">
                {t.services}
              </a>
            </div>

          </div>

          {/* DOCTOR */}
          <div className="hero-right">
            <div className="doctor-card">
              <img src={doctor} alt="Doctor" className="doctor-img" />

              <div className="doctor-overlay">
                <h3>Dr. Somit Kumar Sinha</h3>
                <p>M.Ch Urologist</p>
                <p>{t.expert}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section id="specializations" className="services-section">
        <div className="container">
          <h2 className="section-title">{t.specializations}</h2>

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
          <h2 className="section-title">{t.testimonials}</h2>

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
              <span className="text">{t.googleReviews}</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;