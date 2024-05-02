import About from "./about/About.jsx";
import Contact from "./contact/Contact";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import NavBar from "../navBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
