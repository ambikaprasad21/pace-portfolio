import styles from "./card.module.css";

export default function Card({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.c_1}>
        <div className={styles.p_name}>{project.name}</div>
        <span>{project.description}</span>
        <div className={styles.clone_repo}>
          <a href={project.clone} target="_blank" className={styles.clone}>
            <i className="fab fa-github"></i>
            <span>Clone Project</span>
          </a>
          <a href={project.repo} target="_blank" className={styles.clone}>
            <i className="fab fa-github"></i>
            <span>Repo</span>
          </a>
        </div>
      </div>
      <div className={styles.c_2}>
        <span className={styles.lang_label}>Languages: </span>
        {project.lang.length === 0 ? (
          <span className={styles.lang_label}>code yet to be deployed.</span>
        ) : (
          <span className={styles.all_lang}>
            {project.lang.map((lang) => (
              <Language key={lang.name} language={lang} />
            ))}
          </span>
        )}
      </div>
      <div className={styles.c_3}>
        <a href={project.star} target="_blank" className={styles.star}>
          <i className="fab fa-github"></i>
          <span>Stars</span>
        </a>
        <div className={styles.time}>
          Updated on <span>{project.time}</span>
        </div>
      </div>
    </div>
  );
}

function Language({ language }) {
  return (
    <a href={language.url} target="_blank" className={styles.lang}>
      <span>
        {language.name}: {language.volume}%
      </span>
    </a>
  );
}
