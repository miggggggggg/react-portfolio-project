import styles from "./Projects.module.css";
import ProjectCard from "../ui/ProjectCard";
import type { ProjectItem } from "../../data/projects";
import { PROJECTS_DATA } from "../../data/projects";
import { useState } from "react";
import classNames from "classnames";

function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectItem["category"]>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (project) => project.category === selectedCategory,
        );

  return (
    <section id="projects">
      <div className={styles.projectsSection}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => setSelectedCategory("All")}
            className={classNames(styles.categoryButton, {
              [styles.categoryButtonActive]: selectedCategory === "All",
            })}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("React")}
            className={classNames(styles.categoryButton, {
              [styles.categoryButtonActive]: selectedCategory === "React",
            })}
          >
            React
          </button>
          <button
            onClick={() => setSelectedCategory("Javascript")}
            className={classNames(styles.categoryButton, {
              [styles.categoryButtonActive]: selectedCategory === "Javascript",
            })}
          >
            Javascript
          </button>
        </div>
        <div className={styles.projectsWrapper}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              thumbnailImage={project.thumbnailImage}
              imageAlt={project.imageAlt}
              description={project.description}
              techTags={project.techTags}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
              category={project.category}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
