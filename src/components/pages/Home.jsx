import About from "./About";
import Introduction from "./Introduction";
import NavBar from "./NavBar";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Introduction />
      <About />
      <Projects />
    </>
  );
}
