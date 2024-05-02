import styled from "styled-components";
import { theme } from "../../../theme";

export default function AboutText() {
  return (
    <AboutTextStyled className="about-text">
      <h2>ABOUT ME</h2>
      <h3>
        Front-end Développeur <br /> basé sur Paris , France
      </h3>
      <p>
        En reconversion professionnelle, je suis passionné par le développement
        front-end et motivé pour apprendre et maîtriser les technologies web
        telles que HTML, CSS, JavaScript et React. Je suis ouvert aux
        opportunités de collaboration et de travail sur des projets
        intéressants. Contactez-moi pour discuter de vos idées.
      </p>
    </AboutTextStyled>
  );
}
const AboutTextStyled = styled.div`
  /* Style the text container */

  width: 35%;
  height: 40%;

  /* Organize text in a column */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-weight: bold;
    font-size: 1.3rem;
  }

  h3 {
    font-weight: bold;
    font-size: 1.7rem;

    /* Add a hover effect */
    transition: color 0.3s ease;
    &:hover {
      color: ${theme.colors.orange};
    }
  }

  p {
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    width: 100%;

    display: flex;
    flex-direction: column;

    h2 {
      font-weight: bold;
      font-size: 0.7rem;
    }
    h3 {
      font-weight: bold;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${theme.colors.orange};
      }
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
