import styled from "styled-components";
import { theme } from "../theme";

export default function Projects() {
  return (
    <ProjectsStyled id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        <a
          href="https://crazee-burger-b07j0ju2l-nhat-quans-projects.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="left-review">
            <img src="/crazee-burger.png" alt="crazee-burger" />
            <h2>Crazee Burger</h2>
            <p>"Des burgers gourmands à portée de clic !"</p>
          </div>
        </a>
        <a
          href="https://sushi-sensation-gtlfuuh3t-nhat-quans-projects.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="right-review">
            <img src="/sushi-sensation.png" alt="sushi-sensation" />
            <h2>Sushi-Sensation</h2>
            <p>
              "Résistez à la tentation... ou pas, nos sushis sont irrésistibles
              !"
            </p>
          </div>
        </a>
      </div>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .left-review,
  .right-review {
    transition: transform 0.5s ease, background-color 0.5s ease, color 0.2s ease,
      border 0.5s ease;

    &:hover {
      transform: scale(1.1);
      border: none;
    }
  }

  h1 {
    position: absolute;
    top: 13vh;
    left: 43%;
    font-size: 2.7rem;
    font-weight: bold;
  }

  .project-container {
    display: flex;
    height: 60%;
    margin-top: 15vh;
    gap: 10vh;

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      width: 80%;
      height: 50%;
      object-fit: cover;
      border: 1px solid black;
      border-radius: 20px;
    }

    h2 {
      font-weight: bold;
    }

    .left-review {
      border-radius: 20px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 40px;
      text-align: center;

      p {
        padding-bottom: 5%;
      }
    }
    .right-review {
      border-radius: 20px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;

      padding: 40px;

      p {
        width: 60%;
      }
    }
  }
`;
