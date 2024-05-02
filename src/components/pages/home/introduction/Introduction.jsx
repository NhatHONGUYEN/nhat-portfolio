import styled from "styled-components";
import LeftSideIntro from "./leftSideIntro/LeftSideIntro";
import RightSideIntro from "./rightSideIntro/RightSideIntro";

export default function Introduction() {
  return (
    <IntroductionStyled id="/">
      <div className="introduction-container">
        <LeftSideIntro />
        <RightSideIntro />
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

  .introduction-container {
    height: 80vh;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vh;
  }

  // média pour les différentes tailles d'écran
  @media (max-width: 1024px) {
    .introduction-container {
      width: 80%;
      height: 90%;
      padding-top: 5%;
    }

    .left-side-intro {
      width: 100%;

      h1 {
        margin: 0;
        font-size: 1.7rem;
      }

      p {
        font-size: 0.9rem;
      }

      .icon {
        font-size: 1.2rem;
      }

      .icon-tech {
        font-size: 1.2rem;
      }
    }

    .right-side-intro {
      width: 100%;
      height: 80%;
    }
  }

  @media (max-width: 768px) {
    height: 90vh;

    .introduction-container {
      height: 50vh;
    }

    .right-side-intro {
      height: 90%;
    }
  }

  @media (max-width: 425px) {
    .introduction-container {
      flex-direction: column;
      margin-top: 20%;
    }

    .left-side-intro {
      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.7rem;
      }

      .icon {
        font-size: 1.5rem;
      }

      .icon-tech {
        font-size: 1.5rem;
      }
    }

    .right-side-intro {
      height: 40%;
    }
  }
`;
