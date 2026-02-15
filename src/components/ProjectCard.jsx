import styles from './ProjectCard.module.css';

const ProjectCard = ({ titulo, desc, tech, link }) => {
  return (
    <article className={styles.card}>
      <h3>{titulo}</h3>
      <p>{desc}</p>
      <div className={styles.techStack}>
        {tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.link}
        aria-label={`Ver código fuente de ${titulo}`}
      >
        Ver Código _
      </a>
    </article>
  );
};

export default ProjectCard;