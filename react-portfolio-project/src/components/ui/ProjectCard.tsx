import type { ProjectItem } from "../../data/projects";
import styles from "./ProjectCard.module.css";

function ProjectCard({
  title,
  thumbnailImage,
  imageAlt,
  description,
  techTags,
  demoUrl,
  repoUrl,
}: ProjectItem) {
  return (
    <div className={styles.projectCard}>
      <h4 className={styles.projectTitle}>{title}</h4>
      <img
        src={thumbnailImage}
        alt={imageAlt}
        className={styles.thumbnailImage}
      />
      <p>{description}</p>
      <p className={styles.techTags}>{techTags}</p>
      <div className={styles.linkWrapper}>
        <a
          className={styles.bottomLink}
          target="_blank"
          rel="noopener noreferrer"
          href={demoUrl}
        >
          Live Demo
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={repoUrl}
          className={styles.bottomLink}
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
