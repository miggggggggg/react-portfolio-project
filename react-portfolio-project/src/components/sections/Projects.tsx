import styles from "./Projects.module.css";
import ProjectCard from "../ui/ProjectCard";
import type { ProjectCategory } from "../../data/projects";
import { useState } from "react";

function Projects() {
  const activeCategoryStyle = {
    textDecoration: "underline",
    textDecorationColor: "#7c3aed",
    textUnderlineOffset: "5px",
  };

  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory["category"]>("All");

  const projects = [
    {
      thumbnailImage: "https://dummyimage.com/16:9x180",
      imageAlt: "A placeholder image for a future project",
      title: "React Project",
      description: "React project",
      techTags: "React, React Devtools, Chrome Devtools",
      demoLink: "https://google.com",
      repolink: "https://google.com",
      category: "React",
    },
    {
      thumbnailImage: "https://dummyimage.com/16:9x180",
      imageAlt: "A placeholder image for a future project",
      title: "Javascript Project",
      description: "Javascript project",
      techTags: "placeholder placeholder placeholder`",
      demoLink: "https://google.com",
      repolink: "https://google.com",
      category: "Javascript",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects">
      <div className={styles.projectsSection}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => setSelectedCategory("All")}
            className={styles.categoryButton}
            style={selectedCategory === "All" ? activeCategoryStyle : undefined}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("React")}
            className={styles.categoryButton}
            style={
              selectedCategory === "React" ? activeCategoryStyle : undefined
            }
          >
            React
          </button>
          <button
            onClick={() => setSelectedCategory("Javascript")}
            className={styles.categoryButton}
            style={
              selectedCategory === "Javascript"
                ? activeCategoryStyle
                : undefined
            }
          >
            Javascript
          </button>
        </div>
        <div className={styles.projectsWrapper}>
          {filteredProjects.map((project) => (
            <ProjectCard
              thumbnailImage={project.thumbnailImage}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              techTags={project.techTags}
              demoLink={project.demoLink}
              repolink={project.repolink}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
