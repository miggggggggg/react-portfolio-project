import styles from "./Skills.module.css";
import Badge from "../ui/Badge";
import { useState } from "react";
import type { SkillsItem } from "../../data/skills";
import { SKILLS_DATA } from "../../data/skills";
import classNames from "classnames";

function Skills() {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillsItem["category"]>("Languages");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => skill.category === selectedCategory,
  );

  return (
    <section id="skills">
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <div className={styles.buttonWrapper}>
          <button
            className={classNames(styles.categoryButton, {
              [styles.categoryButtonActive]: selectedCategory === "Languages",
            })}
            onClick={() => setSelectedCategory("Languages")}
          >
            Languages
          </button>
          <button
            className={classNames(styles.categoryButton, {
              [styles.categoryButtonActive]: selectedCategory === "Frameworks",
            })}
            onClick={() => setSelectedCategory("Frameworks")}
          >
            Frameworks/Libraries
          </button>
          <button
            className={classNames(styles.categoryButton, {
              [styles.categoryButtonActive]: selectedCategory === "Tools",
            })}
            onClick={() => setSelectedCategory("Tools")}
          >
            Tools
          </button>
        </div>
        <div className={styles.badgeWrapper}>
          {filteredSkills.map((skill) => (
            <Badge
              key={skill.id}
              title={skill.title}
              description={skill.description}
              category={skill.category}
            ></Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
