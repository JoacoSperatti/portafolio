import styles from './ProjectCard.module.css';
import { useTranslation } from "react-i18next";

const ProjectCard = ({ titulo, desc, tech, image, git, page }) => {
  const { t } = useTranslation();

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{titulo}</h3>
      
      <div className={styles.projectExample}>
        {image && <img src={image} alt={`Captura de ${titulo}`} className={styles.projectImage} />}
      </div>

      <p>{desc}</p>

      <div className={styles.techStack}>
        {tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>

      <div className={styles.actions}>
        {git && (
          <a 
            href={git} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.gitBtn}
          >
            {t("view_code")}
          </a>
        )}
        
        {page && (
          <a 
            href={page} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkBtn}
          >
            {t("visit_site")}
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;