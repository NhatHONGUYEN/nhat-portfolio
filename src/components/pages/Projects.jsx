import styled from "styled-components";

export default function Projects() {
  return (
    <ProjectsStyled>
      <div className="project-container">
        <div className="left-review">
          review
          <h2>Crazee Burger</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            aliquam!
          </p>
        </div>
        <div className="right-review">
          <h2>Sushi-Sensation</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            tenetur!
          </p>
          review
        </div>
      </div>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.div`
  background: red;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 500px;

  .project-container {
    display: flex;
    height: 500px;
    gap: 30px;
    background: blue;

    .left-review {
      background: yellow;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .right-review {
      background: green;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;
