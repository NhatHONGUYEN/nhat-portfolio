import styled from "styled-components";
import ProjectContainer from "./ProjectContainer";

export default function Projects() {
  return (
    <ProjectsStyled id="projects">
      <h1>Projects</h1>
      <ProjectContainer />
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

  h1 {
    position: absolute;
    top: 13vh;
    left: 43%;
    font-size: 2.7rem;
    font-weight: bold;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      top: 15vh;
      left: 44%;
      font-size: 2rem;
    }

    .project-container {
      justify-content: center;
      align-items: center;
      margin-left: 10vh;
      gap: 0;

      h2 {
        padding: 5vh 0;
      }

      img {
        width: 100%;
        height: 100%;
      }

      .left-review,
      .right-review {
        width: 60%;
      }

      .right-review {
        p {
          width: 50%;
        }
      }
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    h1 {
      top: 10vh;
      left: 43%;
      font-size: 1.5rem;
    }

    .project-container {
      flex-direction: column;
      width: 70%;
      height: 80%;
      padding-left: 13vh;

      h2 {
        font-size: 1.2rem;
        padding: 3vh 0;
      }

      img {
        width: 100%;
        height: 100%;
      }

      .left-review,
      .right-review {
        p {
          font-size: 0.7rem;
        }
      }

      .left-review {
        p {
          width: 50%;
        }
      }
    }
  }

  @media (max-width: 425px) {
    h1 {
      top: 7vh;
      left: 39%;
      font-size: 1rem;
    }
  }
`;
