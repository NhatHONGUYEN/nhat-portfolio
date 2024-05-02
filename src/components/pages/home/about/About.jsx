import styled from "styled-components";
import { theme } from "../../../theme";
import ImageAbout from "./ImageAbout";
import AboutText from "./AboutText";

export default function About() {
  return (
    <AboutStyled id="about">
      <div className="about-container">
        <ImageAbout />
        <AboutText />
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.background_grey};

  /* Center the container */
  display: flex;
  justify-content: center;
  align-items: center;

  .about-container {
    height: 90%;
    width: 60%;

    /* Center the image and text */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 100vh;
    width: 100%;

    .about-container {
      height: 90vh;

      .image-about {
        width: 50%;
        height: 70%;
      }
      .about-text {
        width: 70%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h2 {
          font-weight: bold;
          font-size: 1rem;
        }
        h3 {
          font-weight: bold;
          font-size: 1.7rem;
          transition: color 0.3s ease;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 100vh;
    width: 100%;

    .about-container {
      height: 90vh;

      .image-about {
        width: 50%;
        height: 50%;
      }
      .about-text {
        width: 70%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h2 {
          font-weight: bold;
          font-size: 1rem;
        }
        h3 {
          font-weight: bold;
          font-size: 1.7rem;
          transition: color 0.3s ease;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: 100vh;
    width: 100%;

    .about-container {
      height: 90vh;

      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: 5%;

      .image-about {
        width: 60%;
        height: 40%;
      }
      .about-text {
        width: 70%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h2 {
          font-weight: bold;
          font-size: 1rem;
        }
        h3 {
          font-weight: bold;
          font-size: 1.2rem;
          transition: color 0.3s ease;

          &:hover {
            color: ${theme.colors.orange};
          }
        }
        p {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
