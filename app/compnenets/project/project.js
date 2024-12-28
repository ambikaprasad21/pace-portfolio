import Card from "./card";
import styles from "./project.module.css";

const projectData = [
  {
    name: "myportfolio",
    description: "",
    clone: "https://mohd-shahid-iqbal.github.io/myportfolio/",
    repo: "https://mohd-shahid-iqbal.github.io/myportfolio/",
    lang: [
      {
        name: "JavaScript",
        volume: 51.5,
        url: "https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=JavaScript",
      },
      {
        name: "SCSS",
        volume: 45.3,
        url: "https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=SCSS",
      },
      {
        name: "HTML",
        volume: 3,
        url: "https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=HTML",
      },
    ],
    star: "https://github.com/Mohd-shahid-iqbal/myportfolio/stargazers",
    time: "January 17, 2024",
  },
  {
    name: "create-react-app-lambda",
    description: "",
    clone:
      "https://github.com/Mohd-shahid-iqbal/create-react-app-lambda/archive/master.zip",
    repo: "https://github.com/Mohd-shahid-iqbal/create-react-app-lambda",
    lang: [],
    star: "https://github.com/Mohd-shahid-iqbal/create-react-app-lambda/stargazers",
    time: "December 7, 2023",
  },
  {
    name: "Task-Management",
    description:
      "It is a task management system where all user can track their own tasks with the status of in-progress, pending and completed",
    clone:
      "https://github.com/Mohd-shahid-iqbal/Task-Management/archive/master.zip",
    repo: "https://github.com/Mohd-shahid-iqbal/Task-Management",
    lang: [
      {
        name: "JavaScript",
        volume: 78.8,
        url: "https://github.com/Mohd-shahid-iqbal/Task-Management/search?l=JavaScript",
      },
      {
        name: "CSS",
        volume: 19,
        url: "https://github.com/Mohd-shahid-iqbal/Task-Management/search?l=CSS",
      },
      {
        name: "HTML",
        volume: 2.1,
        url: "https://github.com/Mohd-shahid-iqbal/Task-Management/search?l=HTML",
      },
    ],
    star: "https://github.com/Mohd-shahid-iqbal/Task-Management/stargazers",
    time: "February 5, 2023",
  },
  {
    name: "Mohd-shahid-iqbal",
    description: "Config files for my GitHub profile.",
    clone:
      "https://github.com/Mohd-shahid-iqbal/Mohd-shahid-iqbal/archive/master.zip",
    repo: "https://github.com/Mohd-shahid-iqbal/Mohd-shahid-iqbal",
    lang: [],
    star: "https://github.com/Mohd-shahid-iqbal/Mohd-shahid-iqbal/stargazers",
    time: "October 27, 2021",
  },
];

export default function Project() {
  return (
    <div className={styles.container}>
      <h2>Recent Projects</h2>
      <div className={styles.p_c}>
        {projectData.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
