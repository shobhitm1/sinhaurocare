import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

function WhatsAppButton({ language }) {

  const phoneNumber = "919473821013";

  const message =
    language === "hi"
      ? "नमस्ते, मुझे डॉक्टर से अपॉइंटमेंट लेना है।"
      : "Hello Sinha Uro Care, I would like to take an appointment with the doctor.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;