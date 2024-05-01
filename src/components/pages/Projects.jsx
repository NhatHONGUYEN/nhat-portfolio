import styled from "styled-components";

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

      p {
        width: 60%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      position: absolute;
      top: 15vh;
      left: 44%;
      font-size: 2rem;
      font-weight: bold;
    }
    .project-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10vh;
      margin-top: 15vh;
      gap: 0;

      h2 {
        font-weight: bold;
        padding: 5vh 0;
      }

      .right-review {
        img {
          width: 75%;
        }

        p {
          width: 50%;
        }
      }
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    h1 {
      position: absolute;
      top: 10vh;
      left: 43%;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .project-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5vh;
      width: 70%;
      height: 80%;
      padding-left: 20vh;

      a {
        text-decoration: none;
        color: inherit;
      }

      img {
        width: 100%;
        height: 100%;
      }

      h2 {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 3vh 0;
      }

      .left-review {
        width: 60%;
        p {
          font-size: 0.7rem;
        }
      }
      .right-review {
        width: 60%;
        border-radius: 20px;

        p {
          width: 100%;
          font-size: 0.7rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    h1 {
      position: absolute;
      top: 7vh;
      left: 39%;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .project-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 80%;
      gap: 0;
      width: 70%;
      padding-bottom: 5vh;

      a {
        text-decoration: none;
        color: inherit;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 1px solid black;
        border-radius: 20px;
      }

      h2 {
        font-weight: bold;
        font-size: 1.2rem;
        padding: 3vh 0;
      }

      .left-review {
        height: 50%;
        p {
          font-size: 0.7rem;
        }
      }
      .right-review {
        height: 50%;
        border-radius: 20px;

        p {
          width: 60%;
          font-size: 0.7rem;
        }
      }
    }
  }
`;
