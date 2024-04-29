import { FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import styled from "styled-components";

export default function Introduction() {
  return (
    <IntroductionStyled>
      <div className="left-side-intro">
        <h1>Front-End React developer</h1>
        <p>
          Nhat-Quan HO NGUYEN, passionné de front-end et en quête constante de
          connaissances pour créer des interfaces utilisateur attrayantes.
        </p>
        <br />
        <span className="icon">
          <GrGithub /> <FaLinkedin />
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
  gap: 150px;

  .left-side-intro {
    width: 500px;
    h1 {
      margin: 20px 0;
      font-size: 55px;
      font-weight: 700;
    }
    p {
      margin: 20px 0 0 0;
      font-size: 18px;
    }

    .icon {
      height: 32px;
      font-size: 30px;
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
      font-size: 40px;
    }
  }

  .image-intro {
    height: 450px;
    width: 450px;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background-color: black;
    overflow: hidden;
  }
  .image-intro img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
