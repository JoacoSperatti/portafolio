import React from "react";
import styles from "./Hero.module.css";
import fotoPerfil from "../assets/fotoPerfil.jpg";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.command}>{t("hero_command")}</p>
        <h1 className={styles.title}>
          Joaquín <span className={styles.accent}>Speratti</span>
        </h1>
        <p className={styles.subtitle}>{t("hero_subtitle")}</p>
        <p className={styles.description}>
          <Trans i18nKey="hero_desc">
            Apasionado por la eficiencia de <strong>React</strong> para el
            desarrollo web con la finalidad de lograr la resolución de problemas
            complejos a través de la lógica. Actualmente enfocado en construir
            sitios web prácticos y estéticos.
          </Trans>
        </p>
        <div className={styles.buttons}>
          <a href="#proyectos" className={styles.primaryBtn}>
            {t("hero_view_projects")}
          </a>
          <a
            href="/cv_joaquin_speratti.pdf"
            className={styles.secondaryBtn}
            download
          >
            {t("hero_cv")}
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={fotoPerfil}
          alt="Joaquín Speratti"
          className={styles.profilePic}
        />
      </div>
    </section>
  );
};

export default Hero;