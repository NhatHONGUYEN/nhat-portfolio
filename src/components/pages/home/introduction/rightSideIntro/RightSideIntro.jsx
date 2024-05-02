import styled from "styled-components";
import { theme } from "../../../../theme";

export default function RightSideIntro() {
  return (
    <RightSideIntroStyled className="right-side-intro">
      <div className="image-intro">
        <img src="/blackclothesprofil.png" alt="profil-picture" />
      </div>
    </RightSideIntroStyled>
  );
}

const RightSideIntroStyled = styled.div`
  width: 40%;
  height: 70%;

  .image-intro {
    height: 100%;
    width: 100%;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background-color: ${theme.colors.orange};
    overflow: hidden;
  }

  .image-intro img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 425px) {
    padding-left: 20%;
    .image-intro {
      height: 100%;
      width: 70%;
    }
  }
`;
