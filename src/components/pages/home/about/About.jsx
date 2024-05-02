import styled from "styled-components";
import { theme } from "../../../theme";

export default function About() {
  return (
    <AboutStyled id="about">
      <div className="about-container">
        <div className="image-about">
          <img src="/photo-profil.jpg" alt="picture-Nhat" />
        </div>

        <div className="about-text">
          <h2>ABOUT ME</h2>
          <h3>
            Front-end Développeur <br /> basé sur Paris , France
          </h3>
          <p>
            En reconversion professionnelle, je suis passionné par le
            développement front-end et motivé pour apprendre et maîtriser les
            technologies web telles que HTML, CSS, JavaScript et React. Je suis
            ouvert aux opportunités de collaboration et de travail sur des
            projets intéressants. Contactez-moi pour discuter de vos idées.
          </p>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.background_grey};
  display: flex;
  justify-content: center;
  align-items: center;

  .about-container {
    height: 90%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;

    .image-about {
      height: 60%;
      width: 40%;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .about-text {
      width: 35%;
      height: 40%;
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
        transition: color 0.3s ease;

        &:hover {
          color: ${theme.colors.orange};
        }
      }
      p {
        font-size: 1rem;
      }
    }
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