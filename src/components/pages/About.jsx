import styled from "styled-components";

export default function About() {
  return (
    <AboutStyled>
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
          ouvert aux opportunités de collaboration et de travail sur des projets
          intéressants. Contactez-moi pour discuter de vos idées.
        </p>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .image-about {
    height: 600px;
    width: 450px;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background-color: #ffbb70;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .about-text {
    width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
      font-weight: bold;
      font-size: 20px;
    }
    h3 {
      font-weight: bold;
      font-size: 25px;
    }
    p {
      font-size: 18px;
    }
  }
`;
