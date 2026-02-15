import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.command}>$ whoami</p>
        <h1 className={styles.title}>
          Joaquín <span className={styles.accent}>Speratti</span>
        </h1>
        <p className={styles.subtitle}>
          Estudiante de Ingeniería en Sistemas | Trainee Dev.
        </p>
        <p className={styles.description}>
          Apasionado por la eficiencia de <strong>Linux</strong>, el desarrollo
          con
          <strong> React</strong> y la resolución de problemas complejos a
          través de la lógica. Actualmente enfocado en construir sitios web
          practicos y esteticos.
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
    </section>
  );
};

export default Hero;
