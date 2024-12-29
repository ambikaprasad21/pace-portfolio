"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.intro}>
        <h1>Mohd Shahid Iqbal</h1>
        {/* <p>Passionate about changing the world with technology.</p> */}
        <TypewriterComponent />
      </div>
      <div className={styles.social}>
        <a href="https://github.com/Mohd-shahid-iqbal" target="_blank">
          <i className="fab fa-github  fa-3x socialicons"></i>
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100002142394297"
          aria-label="My facebook"
        >
          <i className="fab fa-facebook  fa-3x socialicons"></i>
        </a>

        <a target="_blank" href="https://www.instagram.com/shahid27945/">
          <i className="fab fa-instagram  fa-3x socialicons"></i>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/"
        >
          <i className="fab fa-linkedin  fa-3x socialicons"></i>
        </a>
      </div>
      <button className={styles.btn}>
        <a href="#aboutme">More about me</a>
      </button>
    </div>
  );
}

function TypewriterComponent() {
  return (
    <p>
      <Typewriter
        words={["Passionate about changing the world with technology."]}
        loop={1}
        cursor
        cursorStyle=""
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </p>
  );
}
