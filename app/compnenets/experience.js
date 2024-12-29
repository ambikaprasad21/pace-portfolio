import styles from "./experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container} id="experience">
      <h2>Experiences</h2>
      <div className={styles.e_item}>
        <div className={styles.exp}>
          <img src="/images/x1.png" alt="simpana technology" width={300} />
          <div className={styles.e_t}>
            <div>React Developer</div>
            <div>Aug 2020 – May 2022</div>
          </div>
        </div>
        <div className={styles.exp}>
          <img src="/images/x2.png" alt="vendify" width={300} />
          <div className={styles.e_t}>
            <div>Senior Software Engineer</div>
            <div>May 2022 – March 2023</div>
          </div>
        </div>
        <div className={styles.exp}>
          <img src="/images/x3.png" alt="pace" width={300} />
          <div className={styles.e_t}>
            <div>React Developer</div>
            <div>March 2023 – Present</div>
          </div>
        </div>
      </div>
    </div>
  );
}
