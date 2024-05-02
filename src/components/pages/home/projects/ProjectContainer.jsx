import styled from "styled-components";
import Project from "./Project";

export default function ProjectContainer() {
  return (
    <ProjectContainerStyled>
      <Project
        image="/crazee-burger.png"
        title="Crazee Burger"
        description="Des burgers gourmands à portée de clic !"
        link="https://crazee-burger-eosin-rho.vercel.app/"
        className="left-review"
      />
      <Project
        image="/sushi-sensation.png"
        title="Sushi-Sensation"
        description="Résistez à la tentation... ou pas, nos sushis sont irrésistibles !"
        link="https://sushi-sensation.vercel.app/"
        className="right-review"
      />
    </ProjectContainerStyled>
  );
}

const ProjectContainerStyled = styled.div`
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

  .left-review,
  .right-review {
    transition: transform 0.5s ease, background-color 0.5s ease, color 0.2s ease,
      border 0.5s ease;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    &:hover {
      transform: scale(1.1);
      border: none;
    }
  }

  .left-review {
    p {
      padding-bottom: 5%;
    }
  }

  .right-review {
    p {
      width: 60%;
    }
  }
`;
