import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.f_h}>Get In Touch</p>
      <p className={styles.f_t}>
        I'm currently looking for full-time React Developer/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        questions, or if you just want to say hi, please feel free to email me
        at, <span className={styles.mail}>khansaif59@gmail.com</span>.
      </p>
      <div className={styles.f_b}>
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <span className={styles.f_n}>Mohd Shahid Iqbal</span> using{" "}
        <i className="fab fa-react"></i>
      </div>
    </div>
  );
}
