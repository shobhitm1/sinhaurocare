import React from "react";
import "./Home.css";

function Services({ language }) {
  return (
    <section id="services" className="section">
      <div className="container">

        <h2 className="section-title">
          {language === "en" ? "Our Services" : "हमारी सेवाएँ"}
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>
              {language === "en" ? "Kidney Stone Treatment" : "किडनी स्टोन का उपचार"}
            </h3>
            <p>
              {language === "en"
                ? "Advanced minimally invasive procedures like PCNL, URSL and RIRS for safe and effective stone removal."
                : "PCNL, URSL और RIRS जैसी आधुनिक मिनिमली इनवेसिव तकनीकों द्वारा सुरक्षित और प्रभावी स्टोन हटाने का उपचार।"}
            </p>
            <p>
              {language === "en"
                ? "Faster recovery, less pain and modern laser technology for complete patient comfort."
                : "तेजी से रिकवरी, कम दर्द और आधुनिक लेजर तकनीक के साथ बेहतर रोगी सुविधा।"}
            </p>
          </div>

          <div className="service-card">
            <h3>
              {language === "en" ? "Prostate Enlargement (BPH)" : "प्रोस्टेट बढ़ना (BPH)"}
            </h3>
            <p>
              {language === "en"
                ? "Modern laser and endoscopic techniques to treat enlarged prostate without major surgery."
                : "बिना बड़ी सर्जरी के प्रोस्टेट बढ़ने का इलाज आधुनिक लेजर और एंडोस्कोपिक तकनीकों से।"}
            </p>
            <p>
              {language === "en"
                ? "Improved urine flow, reduced symptoms and quick recovery time."
                : "पेशाब के प्रवाह में सुधार, लक्षणों में कमी और जल्दी रिकवरी।"}
            </p>
          </div>

          <div className="service-card">
            <h3>
              {language === "en" ? "Urinary Tract Infection (UTI)" : "यूरिन इन्फेक्शन (UTI)"}
            </h3>
            <p>
              {language === "en"
                ? "Accurate diagnosis with advanced lab support and personalized treatment plans."
                : "उन्नत लैब जांच के साथ सटीक निदान और व्यक्तिगत उपचार योजना।"}
            </p>
            <p>
              {language === "en"
                ? "Prevention guidance to avoid recurrent infections and long-term complications."
                : "बार-बार होने वाले संक्रमण और दीर्घकालिक जटिलताओं से बचाव के लिए मार्गदर्शन।"}
            </p>
          </div>

          <div className="service-card">
            <h3>
              {language === "en" ? "Male Infertility" : "पुरुष बांझपन"}
            </h3>
            <p>
              {language === "en"
                ? "Comprehensive evaluation including hormonal and semen analysis for accurate diagnosis."
                : "सटीक निदान के लिए हार्मोनल और सीमेन जांच सहित संपूर्ण मूल्यांकन।"}
            </p>
            <p>
              {language === "en"
                ? "Personalized medical and surgical treatment options for improved fertility outcomes."
                : "बेहतर परिणामों के लिए व्यक्तिगत दवाइयों और सर्जिकल उपचार विकल्प।"}
            </p>
          </div>

          <div className="service-card">
            <h3>
              {language === "en" ? "Bladder & Kidney Tumors" : "ब्लैडर एवं किडनी ट्यूमर"}
            </h3>
            <p>
              {language === "en"
                ? "Expert surgical and non-surgical management using advanced oncology protocols."
                : "आधुनिक ऑन्कोलॉजी तकनीकों द्वारा सर्जिकल और गैर-सर्जिकल विशेषज्ञ उपचार।"}
            </p>
            <p>
              {language === "en"
                ? "Early detection, precise treatment and compassionate cancer care support."
                : "जल्दी पहचान, सटीक उपचार और संवेदनशील कैंसर देखभाल।"}
            </p>
          </div>

          <div className="service-card">
            <h3>
              {language === "en" ? "Uro Gynecology" : "यूरो-गायनेकोलॉजी"}
            </h3>
            <p>
              {language === "en"
                ? "Specialized care for female urological conditions including urinary incontinence, pelvic floor disorders and bladder control issues."
                : "महिलाओं में मूत्र संबंधी समस्याओं जैसे पेशाब पर नियंत्रण की कमी, पेल्विक फ्लोर विकार और ब्लैडर समस्याओं का विशेष उपचार।"}
            </p>
          </div>

          <div className="service-card">
            <h3>
              {language === "en" ? "Pediatric Urology" : "बाल मूत्ररोग"}
            </h3>
            <p>
              {language === "en"
                ? "Expert treatment for urological conditions in children including congenital abnormalities, urinary infections and pediatric surgeries."
                : "बच्चों में मूत्ररोग संबंधी समस्याओं जैसे जन्मजात विकार, संक्रमण और सर्जरी का विशेषज्ञ उपचार।"}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;