import { FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import styled from "styled-components";
import { theme } from "../theme";

export default function Introduction() {
  return (
    <IntroductionStyled id="/">
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

      <div className="image-intro">
        <img src="/blackclothesprofil.png" alt="profil-picture" />
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
  gap: 10vh;

  .left-side-intro {
    width: 25%;
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

  .image-intro {
    height: 50%;
    width: 25%;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background-color: ${theme.colors.orange};
    overflow: hidden;
  }
  .image-intro img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
