"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <a href="#home" onClick={() => handleClick("#home")}>
          {"<Mohd />"}
        </a>
      </div>
      <ul style={{ marginBottom: 0 }}>
        <li>
          <a
            href="#projects"
            onClick={() => handleClick("#projects")}
            className={activeLink === "#projects" ? styles.active : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1gDdMSvyTkcT8WWzZ3-gbiTpt9ROAjjQ0/edit?usp=sharing&ouid=115531536691684412006&rtpof=true&sd=true"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#aboutme"
            onClick={() => handleClick("#aboutme")}
            className={activeLink === "#aboutme" ? styles.active : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => handleClick("#skills")}
            className={activeLink === "#skills" ? styles.active : ""}
          >
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}
