import React from "react";

export default function Appointment({ language }) {

  const text = {
    en: {
      title: "Book Appointment",
      note: "To book an appointment, please call or connect via WhatsApp."
    },
    hi: {
      title: "अपॉइंटमेंट बुक करें",
      note: "अपॉइंटमेंट बुक करने के लिए कृपया कॉल करें या व्हाट्सएप के माध्यम से संपर्क करें।"
    }
  };

  const t = text[language];

  return (
    <section id="appointment" className="section">
      <div className="container">

        <h2 className="section-title">{t.title}</h2>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <p style={{ fontSize: "18px", color: "#475569" }}>
            {t.fee}
          </p>

          <p style={{ marginTop: "15px", color: "#64748b" }}>
            {t.note}
          </p>
        </div>

      </div>
    </section>
  );
}