import styled from "styled-components";

export default function Introduction() {
  return (
    <IntroductionStyled>
      <div className="left-side-intro">
        <h1>Front-End React developer</h1>
        <span>
          Nhat-Quan HO NGUYEN, passionné de front-end et en quête constante de
          connaissances pour créer des interfaces utilisateur attrayantes.
        </span>
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
    span {
      margin: 20px 0;
      font-size: 18px;
    }
  }
  .image-intro {
    height: 400px;
    width: 400px;
  }
  .image-intro img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
