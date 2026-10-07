import styles from "./Skills.module.css";
import Badge from "../ui/Badge";
import { useState } from "react";
import type { SkillsCategory } from "../../data/skills";

function Skills() {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillsCategory["category"]>("Languages");

  const activeCategoryStyle = {
    textDecoration: "underline",
    textDecorationColor: "#7c3aed",
    textUnderlineOffset: "5px",
  };

  return (
    <section id="skills">
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.categoryButton}
            onClick={() => setSelectedCategory("Languages")}
            style={
              selectedCategory === "Languages" ? activeCategoryStyle : undefined
            }
          >
            Languages
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => setSelectedCategory("Frameworks")}
            style={
              selectedCategory === "Frameworks"
                ? activeCategoryStyle
                : undefined
            }
          >
            Frameworks/Libraries
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => setSelectedCategory("Tools")}
            style={
              selectedCategory === "Tools" ? activeCategoryStyle : undefined
            }
          >
            Tools
          </button>
        </div>
        <div className={styles.badgeWrapper}>
          {selectedCategory === "Languages" ? (
            <>
              <Badge
                title="HTML"
                description="Semantic & accessible page structure"
              ></Badge>
              <Badge
                title="CSS"
                description="Responsive and polished visual design"
              ></Badge>
              <Badge
                title="Javascript"
                description="Dynamic and interactive web applications"
              ></Badge>
              <Badge
                title="Typescript"
                description="Type-safe and maintainable application development"
              ></Badge>
            </>
          ) : selectedCategory === "Frameworks" ? (
            <>
              <Badge
                title="React"
                description="Component-based interactive user interfaces"
              ></Badge>
              <Badge
                title="Next.js"
                description="Full-stack React application framework"
              ></Badge>
              <Badge
                title="Tanstack Query"
                description="Server-state fetching and synchronization"
              ></Badge>
              <Badge
                title="TanStack Router"
                description="Type-safe client-side routing"
              ></Badge>
            </>
          ) : (
            <>
              <Badge
                title="Vite"
                description="Fast modern frontend build tooling"
              ></Badge>
              <Badge
                title="React Devtools"
                description="Inspect and debug React components"
              ></Badge>
              <Badge
                title="Chrome Devtools"
                description="Debug and inspect web applications"
              ></Badge>
              <Badge
                title="Git & GitHub"
                description="Version control and code collaboration"
              ></Badge>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
