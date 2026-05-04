import React from "react"; 
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("skills_frontend"),
      items: ["React", "CSS Modules", "HTML5","Tailwind CSS", "Sass"],
    },
    {
      title: t("skills_backend"),
      items: ["Node.js", "C++", "Python", "JavaScript"],
    },
    {
      title: t("skills_db"),
      items: ["Firestore","Supabase", "Electron JS"],
    },
    {
      title: t("skills_lang_cat"),
      items: [t("lang_es"), t("lang_en")],
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>{t("skills_title")}</h2>
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