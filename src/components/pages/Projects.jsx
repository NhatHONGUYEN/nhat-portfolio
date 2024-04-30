import styled from "styled-components";

export default function Projects() {
  return (
    <ProjectsStyled>
      <h1>Projects</h1>
      <div className="project-container">
        <div className="left-review">
          <img src="/crazee-burger.png" alt="crazee-burger" />
          <h2>Crazee Burger</h2>
          <p>"Des burgers gourmands à portée de clic !"</p>
        </div>
        <div className="right-review">
          <img src="/sushi-sensation.png" alt="sushi-sensation" />
          <h2>Sushi-Sensation</h2>
          <p>
            "Résistez à la tentation... ou pas, nos sushis sont irrésistibles !"
          </p>
        </div>
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
  gap: 500px;
  position: relative;

  h1 {
    position: absolute;
    top: 13vh;
    font-size: 45px;
    font-weight: bold;
  }

  .project-container {
    display: flex;
    height: 500px;
    margin-top: 15vh;
    gap: 10vh;

    img {
      width: 400px;
      height: 300px;
      object-fit: cover;
      border: 1px solid black;
      border-radius: 20px;
    }

    h2 {
      font-weight: bold;
    }

    .left-review {
      border: 1px solid black;
      border-radius: 20px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;

      p {
        padding-bottom: 20px;
      }
    }
    .right-review {
      border: 1px solid black;
      border-radius: 20px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
    }
  }
`;
