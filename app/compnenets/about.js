import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container} id="aboutme">
      <div className={styles.image_cont}>
        <img src="/images/p_photo.png" alt="profile_photo" />
      </div>
      <div className={styles.a_t}>
        <h2>About Me</h2>
        <p>
          My name is Mohd Shahid Iqbal. I’m a post-graduate of 2020 from Jamia
          hamdard University at New Delhi with a degree in Masters of Computer
          Application . I'm most passionate about giving back to the community,
          and my goal is to pursue this passion within the field of software
          engineering. In my free time I like working on open source projects.
        </p>

        <a
          href="https://docs.google.com/document/d/1gDdMSvyTkcT8WWzZ3-gbiTpt9ROAjjQ0/edit?usp=sharing&ouid=115531536691684412006&rtpof=true&sd=true"
          target="_blank"
        >
          <button className={styles.resume}>Resume</button>
        </a>
      </div>
    </div>
  );
}
