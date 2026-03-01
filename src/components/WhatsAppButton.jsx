import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

function WhatsAppButton() {

  const phoneNumber = "919473821013";

  const message =
    "Hello Sinha Uro Care , I would like to take an appointment with doctor.";

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
