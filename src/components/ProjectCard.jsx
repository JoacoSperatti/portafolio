import styles from './ProjectCard.module.css';

const ProjectCard = ({ titulo, desc, tech, image, git, page }) => {
  return (
    <article className={styles.card}>
      <h3>{titulo}</h3>
      
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
            Ver Código _
          </a>
        )}
        
        {page && (
          <a 
            href={page} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkBtn}
          >
            Visitar Sitio
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;