import React from "react";
import "./Home.css";

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">

        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Kidney Stone Treatment</h3>
            <p>
              Advanced minimally invasive procedures like PCNL, URSL and RIRS 
              for safe and effective stone removal.
            </p>
            <p>
              Faster recovery, less pain and modern laser technology 
              for complete patient comfort.
            </p>
          </div>

          <div className="service-card">
            <h3>Prostate Enlargement (BPH)</h3>
            <p>
              Modern laser and endoscopic techniques to treat enlarged prostate 
              without major surgery.
            </p>
            <p>
              Improved urine flow, reduced symptoms and quick recovery time.
            </p>
          </div>

          <div className="service-card">
            <h3>Urinary Tract Infection (UTI)</h3>
            <p>
              Accurate diagnosis with advanced lab support and 
              personalized treatment plans.
            </p>
            <p>
              Prevention guidance to avoid recurrent infections 
              and long-term complications.
            </p>
          </div>

          <div className="service-card">
            <h3>Male Infertility</h3>
            <p>
              Comprehensive evaluation including hormonal and semen analysis 
              for accurate diagnosis.
            </p>
            <p>
              Personalized medical and surgical treatment options 
              for improved fertility outcomes.
            </p>
          </div>

          <div className="service-card">
            <h3>Bladder & Kidney Tumors</h3>
            <p>
              Expert surgical and non-surgical management using 
              advanced oncology protocols.
            </p>
            <p>
              Early detection, precise treatment and compassionate 
              cancer care support.
            </p>
          </div>

          <div className="service-card">
  <h3>Uro Gynecology</h3>
  <p>
    Specialized care for female urological conditions including urinary
    incontinence, pelvic floor disorders and bladder control issues.
  </p>
</div>

<div className="service-card">
  <h3>Pediatric Urology</h3>
  <p>
    Expert treatment for urological conditions in children including
    congenital abnormalities, urinary infections and pediatric surgeries.
  </p>
</div>

        </div>

      </div>
    </section>
  );
}

export default Services;