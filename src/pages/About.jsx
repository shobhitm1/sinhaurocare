import React from "react";
import "./About.css";

export default function About({ language }) {
  return (
    <section id="about" className="section">
      <div className="container">

        <h2 className="section-title">
          {language === "en"
            ? "About Dr. Somit Kumar Sinha"
            : "डॉ. सोमित कुमार सिन्हा के बारे में"}
        </h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
            color: "inherit"
          }}
        >

          <p>
            {language === "en" ? (
              <>
                Meet <strong>Dr. Somit Kumar Sinha</strong>, a dedicated and highly
                experienced Urologist now bringing advanced urology care to
                Gorakhpur with compassion, precision, and ethical medical practice.
              </>
            ) : (
              <>
                <strong>डॉ. सोमित कुमार सिन्हा</strong> एक समर्पित और अनुभवी
                मूत्ररोग विशेषज्ञ हैं, जो गोरखपुर में आधुनिक और विश्वसनीय
                मूत्ररोग उपचार प्रदान कर रहे हैं। वे करुणा, सटीकता और
                नैतिक चिकित्सा पद्धति के साथ उपचार करते हैं।
              </>
            )}
          </p>

          <br />

          <h3 style={{ color: "#0ea5e9" }}>
            {language === "en" ? <u>Educational Journey</u> : "शैक्षणिक योग्यता"}
          </h3>

          <ul>
            <li>
              <b>MBBS</b> – B.R.D. Medical College, Gorakhpur
            </li>
            <li>
              <b>MS (General Surgery)</b> – Uttar Pradesh University of Medical Sciences,Saifai
            </li>
            <li>  
              <b>M.Ch (Urology Super-Specialization)</b> – Sardar Patel Medical College,Bikaner
            </li>
          </ul>

          <br />

          <h3 style={{ color: "#0ea5e9" }}>
            {language === "en" ? <u>Areas of Expertise</u> : "विशेषज्ञता के क्षेत्र"}
          </h3>

          <ul>
            <li>{language === "en" ? "Urology" : "मूत्ररोग"}</li>
            <li>{language === "en" ? "Andrology" : "एंड्रोलॉजी"}</li>
            <li>{language === "en" ? "Endourology" : "एंडोयूरोलॉजी"}</li>
            <li>{language === "en" ? "Pediatric Urology" : "बाल मूत्ररोग"}</li>
            <li>{language === "en" ? "Uro Gynecology" : "यूरो गायनेकोलॉजी"}</li>
            <li>{language === "en" ? "Uro-Oncology" : "यूरो ऑन्कोलॉजी"}
            </li>
          </ul>

          <br />

          <p>
            {language === "en" ? (
              <>
                Dr. Sinha has successfully performed <strong>1200+ surgeries </strong>
                 across various urological conditions and brings years of practical excellence.
              </>
            ) : (
              <>
                डॉ. सिन्हा ने विभिन्न मूत्ररोग समस्याओं में
                <strong> 1200+ सफल सर्जरी</strong> की हैं और वर्षों का
                व्यावहारिक अनुभव रखते हैं।
              </>
            )}
          </p>

          <p>
            {language === "en" ? (
              <>
                He has also presented and published multiple research papers
                on critical urology topics at reputed medical platforms.
              </>
            ) : (
              <>
                उन्होंने मूत्ररोग से संबंधित महत्वपूर्ण विषयों पर
                प्रतिष्ठित चिकित्सा मंचों पर शोध पत्र प्रस्तुत और प्रकाशित किए हैं।
              </>
            )}
          </p>

          <p>
            {language === "en" ? (
              <>
                If you are looking for trustworthy treatment for kidney stones,
                prostate issues, UTIs, male infertility, or pediatric urology care —
                Dr. Somit Kumar Sinha is here to guide you with expertise, ethics, and empathy.
              </>
            ) : (
              <>
                यदि आप किडनी स्टोन, प्रोस्टेट समस्या, यूरिन इन्फेक्शन,
                पुरुष बांझपन या बाल मूत्ररोग उपचार के लिए विश्वसनीय समाधान
                चाहते हैं — डॉ. सोमित कुमार सिन्हा आपकी विशेषज्ञता,
                नैतिकता और सहानुभूति के साथ मार्गदर्शन करेंगे।
              </>
            )}
          </p>

        </div>
      </div>
    </section>
  );
}