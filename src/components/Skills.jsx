import React from "react"; 
import styles from "./Skills.module.css";
import { useTranslation } from "react-i18next";
import { 
  FaReact, FaHtml5, FaSass, FaNodeJs, FaPython, FaJs, FaLanguage 
} from "react-icons/fa";
import { 
  SiCssmodules, SiTailwindcss, SiCplusplus, SiFirebase, SiSupabase, SiElectron, SiHostinger 
} from "react-icons/si";

const Skills = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("skills_frontend"),
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "CSS Modules", icon: <SiCssmodules /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Sass", icon: <FaSass /> },
      ],
    },
    {
      title: t("skills_backend"),
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      title: t("skills_db"),
      items: [
        { name: "Firestore", icon: <SiFirebase /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Hostinger", icon: <SiHostinger /> },
        { name: "Electron JS", icon: <SiElectron /> },
      ],
    },
    {
      title: t("skills_lang_cat"),
      items: [
        { name: t("lang_es"), icon: <FaLanguage /> },
        { name: t("lang_en"), icon: <FaLanguage /> },
      ],
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className="section-title">{t("skills_title")}</h2>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.categoryCard}>
            <h3 className={styles.catTitle}>{cat.title}</h3>
            <ul className={styles.list}>
              {cat.items.map((item, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.icon}>{item.icon}</span> {item.name}
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