import styled from "styled-components";
import About from "./about/About.jsx";
import Contact from "./contact/Contact";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import NavBar from "../navBar/NavBar";

export default function Home() {
  return (
    <HomeStyled>
      <NavBar />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  @media (min-width: 426px) and (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 425px) {
    width: 425px;
  }
`;
