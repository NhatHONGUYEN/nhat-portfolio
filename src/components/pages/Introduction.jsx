import { FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import styled from "styled-components";
import { theme } from "../theme";

export default function Introduction() {
  return (
    <IntroductionStyled id="/">
      <div className="introduction-container">
        <div className="left-side-intro">
          <h1>Front-End React developer</h1>
          <p>
            Nhat-Quan HO NGUYEN, passionné de front-end et en quête constante de
            connaissances pour créer des interfaces utilisateur attrayantes.
          </p>
          <br />
          <span className="icon">
            <a
              href="https://github.com/NhatHONGUYEN"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nhat-quan-ho-nguyen/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
          <br />
          <div className="skills">
            <p>
              <span className="tech-stack-text">Tech Stack |</span>
              <span className="icon-tech">
                <FaHtml5 /> <IoLogoCss3 /> <RiJavascriptFill /> <FaReact />
              </span>
            </p>
          </div>
        </div>

        <div className="right-side-intro">
          <div className="image-intro">
            <img src="/blackclothesprofil.png" alt="profil-picture" />
          </div>
        </div>
      </div>
    </IntroductionStyled>
  );
}

const IntroductionStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .introduction-container {
    height: 80vh;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vh;
  }

  .left-side-intro {
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

    .icon {
      height: 20%;
      font-size: 2rem;

      svg {
        color: black;
        transition: transform 0.2s, color 0.2s;

        &:hover {
          transform: translateY(-10px);
          color: ${theme.colors.orange};
        }
      }
    }

    .skills {
      display: flex;
      align-items: center;
    }

    .tech-stack-text {
      margin-right: 30px;
    }
    .icon-tech {
      display: inline-flex;
      transform: translateY(10px);
      font-size: 2rem;

      svg {
        transition: transform 0.2s, color 0.2s;

        &:hover {
          transform: translateY(-10px);
          color: ${theme.colors.orange};
        }
      }
    }
  }

  .right-side-intro {
    width: 40%;
    height: 70%;
    .image-intro {
      height: 100%;
      width: 100%;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background-color: ${theme.colors.orange};
      overflow: hidden;
    }
    .image-intro img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .introduction-container {
      width: 80%;
      height: 90;
      padding-top: 5%;
    }

    .left-side-intro {
      width: 100%;

      h1 {
        margin: 0;
        font-size: 1.7rem;
      }
      p {
        font-size: 0.9rem;
      }

      .icon {
        font-size: 1.2rem;
      }

      .tech-stack-text {
        margin-right: 30px;
      }
      .icon-tech {
        font-size: 1.2rem;
      }
    }

    .right-side-intro {
      width: 100%;
      height: 80%;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    height: 90vh;

    .introduction-container {
      width: 80%;
      height: 50vh;
      padding-top: 5%;
    }

    .left-side-intro {
      width: 100%;

      h1 {
        margin: 0;
        font-size: 1.7rem;
      }
      p {
        font-size: 0.9rem;
      }

      .icon {
        font-size: 1.2rem;
      }

      .tech-stack-text {
        margin-right: 30px;
      }
      .icon-tech {
        font-size: 1.2rem;
      }
    }

    .right-side-intro {
      width: 100%;
      height: 90%;
    }
  }

  @media (max-width: 425px) {
    .introduction-container {
      display: flex;
      flex-direction: column;
      margin-top: 20%;
    }

    .left-side-intro {
      width: 100%;

      h1 {
        margin: 0;
        font-size: 1.5rem;
      }
      p {
        font-size: 0.7rem;
      }

      .icon {
        font-size: 1.5rem;
      }

      .tech-stack-text {
        margin-right: 30px;
      }
      .icon-tech {
        font-size: 1.5rem;
      }
    }

    .right-side-intro {
      width: 100%;
      height: 40%;
    }
  }
`;
