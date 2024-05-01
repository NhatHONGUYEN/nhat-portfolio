import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Introduction from "./Introduction";
import NavBar from "./NavBar";
import Projects from "./Projects";

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
