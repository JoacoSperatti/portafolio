import React from "react"; // Asegúrate de importar React si usas JSX (aunque en Vite nuevo no siempre es obligatorio, es buena práctica)
import styles from "./Skills.module.css";

const Skills = () => {
  const categories = [
    {
      title: "Backend & Lenguajes",
      items: ["Node.js", "Express", "Python", "JavaScript (ES6+)"],
    },
    {
      title: "Frontend & UI",
      items: ["React", "CSS Modules", "HTML5", "Tailwind (Básico)"],
    },
    {
      title: "Database & Tools",
      items: ["PostgreSQL", "MongoDB", "Git/GitHub", "Docker"],
    },
    {
      title: "Linux & Workflow",
      items: ["Arch Linux", "Bash Scripting", "Vim/Neovim", "Hyprland"],
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>Tech Stack</h2>
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
