import React from "react";

export default function Appointment() {
  return (
    <section id="appointment" className="section">
      <div className="container">

        <h2 className="section-title">Book Appointment</h2>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <p style={{ fontSize: "18px", color: "#475569" }}>
            Consultation Fee: ₹500
          </p>

          <p style={{ marginTop: "15px", color: "#64748b" }}>
            To book an appointment, please call or connect via WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
