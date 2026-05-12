import React from "react";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";
import styles from "./Diplomas.module.css";

const Diplomas = () => {
  const { t } = useTranslation();

  const diplomas = [
    {
      title: t("diploma_systems"),
      institution: "UTN FRBA",
      icon: <FaGraduationCap />,
    },
    {
      title: t("diploma_react"),
      institution: "Coderhouse",
      icon: <FaCertificate />,
    },
    {
      title: t("diploma_js"),
      institution: "Coderhouse",
      icon: <FaCode />,
    },
    {
      title: t("diploma_web"),
      institution: "Coderhouse",
      icon: <FaCertificate />,
    },
  ];

  return (
    <section id="diplomas" className={styles.sectionDiplomas}>
      <h2 className="section-title">{t("diplomas_title")}</h2>
      <div className={styles.grid}>
        {diplomas.map((d, index) => (
          <div key={index} className={styles.diplomaCard}>
            <div className={styles.icon}>{d.icon}</div>
            <h3 className={styles.title}>{d.title}</h3>
            <span className={styles.institution}>{d.institution}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diplomas;
