import React from "react";
import styles from "./Hero.module.css";
import fotoPerfil from "../assets/fotoPerfil.jpg"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.command}>$ whoami</p>
        <h1 className={styles.title}>
          Joaquín <span className={styles.accent}>Speratti</span>
        </h1>
        <p className={styles.subtitle}>
          Estudiante de Ingeniería en Sistemas | Front-End Dev.
        </p>
        <p className={styles.description}>
          Apasionado por la eficiencia de <strong>React</strong> para el
          desarrollo web con la finalidad de lograr la resolución de problemas
          complejos a través de la lógica. Actualmente enfocado en construir
          sitios web prácticos y estéticos.
        </p>
        <div className={styles.buttons}>
          <a href="#proyectos" className={styles.primaryBtn}>
            Ver Proyectos
          </a>
          <a href="/cv.pdf" className={styles.secondaryBtn} download>
            Descargar CV
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
