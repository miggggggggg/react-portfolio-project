import type { ProjectCardData } from "../../data/projects";
import styles from "./ProjectCard.module.css";

function ProjectCard({
  thumbnailImage,
  imageAlt,
  title,
  description,
  techTags,
  demoLink,
  repolink,
}: ProjectCardData) {
  return (
    <div className={styles.projectCard}>
      <h4 className={styles.projectTitle}>{title}</h4>
      <img
        className={styles.thumbnailImage}
        src={thumbnailImage}
        alt={imageAlt}
      />
      <p>{description}</p>
      <p>{techTags}</p>
      <div className={styles.linkWrapper}>
        <a
          className={styles.bottomLink}
          target="_blank"
          rel="noopener noreferrer"
          href={demoLink}
        >
          Live Demo
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={repolink}
          className={styles.bottomLink}
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
