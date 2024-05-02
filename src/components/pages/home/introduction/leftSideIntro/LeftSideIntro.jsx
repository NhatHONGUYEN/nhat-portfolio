import SocialIcons from "./SocialIcons.jsx";
import Skills from "./Skills.jsx";
import styled from "styled-components";
import { theme } from "../../../../theme/index.js";

export default function LeftSideIntro() {
  return (
    <LeftSideIntroStyled className="left-side-intro">
      <h1>Front-End React developer</h1>
      <p>
        Nhat-Quan HO NGUYEN, passionné de front-end et en quête constante de
        connaissances pour créer des interfaces utilisateur attrayantes.
      </p>
      <br />
      <SocialIcons />
      <br />
      <Skills />
    </LeftSideIntroStyled>
  );
}

const LeftSideIntroStyled = styled.div`
  width: 40%;

  h1 {
    margin: 20px 0;
    font-size: 3rem;
    font-weight: 700;
    color: ${theme.colors.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.orange};
    }
  }

  p {
    margin: 20px 0 0 0;
    font-size: 1rem;
  }
`;
