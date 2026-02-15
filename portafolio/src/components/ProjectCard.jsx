import styles from './ProjectCard.module.css';

const ProjectCard = ({ titulo, desc, tech, link }) => {
  return (
    <div className={styles.card}>
      <h3>{titulo}</h3>
      <p>{desc}</p>
      <div className={styles.techStack}>
        {tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        Ver Código _
      </a>
    </div>
  );
};

export default ProjectCard;