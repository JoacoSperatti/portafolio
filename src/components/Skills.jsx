import React from "react"; 
import styles from "./Skills.module.css";

const Skills = () => {
  const categories = [
    {
      title: "Frontend & UI",
      items: ["React", "CSS Modules", "HTML5", "Sass"],
    },
    {
      title: "Backend & Lenguajes",
      items: ["Node.js", "C++", "Python", "JavaScript"],
    },
    {
      title: "Database & Tools",
      items: ["Firestore", "Git/GitHub"],
    },
    {
      title: "Languajes",
      items: ["Español Nativo 🇦🇷", "Inglés Avanzado 🇬🇧"],
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.categoryCard}>
            <h3 className={styles.catTitle}>{cat.title}</h3>
            <ul className={styles.list}>
              {cat.items.map((item, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.bullet}>&gt;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;