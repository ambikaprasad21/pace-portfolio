"use client";
import { useState } from "react";
import styles from "./skills.module.css";

const tabStyle = {
  transition: "all 100",
};

const activeTab = {
  color: "#bbb",
  fontWeight: 100,
  borderWidth: "1px 1px 0 1px",
  borderColor: "#bbb",
  borderStyle: "solid",
  padding: "8px 0",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  ...tabStyle,
};

const normalTab = {
  color: " #0d6efd",
  borderWidth: "0 0 1px 0",
  borderColor: "#bbb",
  borderStyle: "solid",
  padding: "8px 0",
  ...tabStyle,
};

const technicalSkill = [
  { name: "React", progress: 90 },
  { name: "HTML/CSS", progress: 70 },
  { name: "JavaScript", progress: 90 },
  { name: "TypeScript", progress: 80 },
  { name: "Data Structures", progress: 70 },
  { name: "SQL", progress: 75 },
];

const softSkill = [
  { name: "Goal-Oriented", progress: 85 },
  { name: "Problem Solving", progress: 80 },
  { name: "Collaboration", progress: 95 },
  { name: "Empathy", progress: 95 },
  { name: "Positivity", progress: 70 },
  { name: "Organization", progress: 70 },
  { name: "Adaptability", progress: 85 },
  { name: "Creativity", progress: 95 },
];

export default function Skills() {
  const [active, setActive] = useState(1);

  function handleTabClick(para) {
    setActive(para);
  }

  return (
    <div className={styles.skills}>
      <h2 className={styles.s_h}>Skills</h2>
      <div className={styles.s_c}>
        <div className={styles.tab}>
          <div
            onClick={() => handleTabClick(1)}
            style={active ? activeTab : normalTab}
            className={active ? styles.tab_hover : ""}
          >
            Technical Skills
          </div>
          <div
            onClick={() => handleTabClick(0)}
            style={!active ? activeTab : normalTab}
            className={!active ? styles.tab_hover : ""}
          >
            Soft Skills
          </div>
        </div>
        <div className={styles.s_p}>
          {active
            ? technicalSkill.map((skill) => (
                <div className={styles.s_detail} key={skill.name}>
                  <p className={styles.s_label}>{skill.name}</p>
                  <div className={styles.rating_contianer}>
                    <div
                      className={styles.s_rating}
                      style={{
                        width: `${skill.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            : softSkill.map((skill) => (
                <div className={styles.s_detail} key={skill.name}>
                  <p className={styles.s_label}>{skill.name}</p>
                  <div className={styles.rating_contianer}>
                    <div
                      className={styles.s_rating}
                      style={{
                        width: `${skill.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
