import Image from "next/image";
import styles from "./page.module.css";
import Header from "./compnenets/header";
import Footer from "./compnenets/footer";
import Skills from "./compnenets/skills";
import Leadership from "./compnenets/leadership";
import Project from "./compnenets/project/project";
import Experience from "./compnenets/experience";
import About from "./compnenets/about";

export default function Home() {
  return (
    <div>
      {/* <Header />
      <h1>hello</h1> */}
      {/* <Footer /> */}
      {/* <Skills /> */}
      {/* <Leadership /> */}
      {/* <Project /> */}
      {/* <Experience /> */}
      <About />
    </div>
  );
}
