import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";
import styles from "./Diplomas.module.css";
import imgUtn from "../assets/utn.png";
import imgReact from "../assets/react.png";
import imgJs from "../assets/javascript.png";
import imgWeb from "../assets/desarrolloweb.png";

const Diplomas = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const diplomas = [
    {
      title: t("diploma_systems"),
      institution: "UTN FRBA",
      icon: <FaGraduationCap />,
      image: imgUtn,
    },
    {
      title: t("diploma_react"),
      institution: "Coderhouse",
      icon: <FaCertificate />,
      image: imgReact,
    },
    {
      title: t("diploma_js"),
      institution: "Coderhouse",
      icon: <FaCode />,
      image: imgJs,
    },
    {
      title: t("diploma_web"),
      institution: "Coderhouse",
      icon: <FaCertificate />,
      image: imgWeb,
    },
  ];

  return (
    <section id="diplomas" className={styles.sectionDiplomas}>
      <h2 className="section-title">{t("diplomas_title")}</h2>
      <div className={styles.grid}>
        {diplomas.map((d, index) => (
          <div 
            key={index} 
            className={styles.diplomaCard}
            onClick={() => setSelectedImage(d.image)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.icon}>{d.icon}</div>
            <h3 className={styles.title}>{d.title}</h3>
            <span className={styles.institution}>{d.institution}</span>
          </div>
        ))}
      </div>

      {selectedImage && createPortal(
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificado" className={styles.modalImage} />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Diplomas;
