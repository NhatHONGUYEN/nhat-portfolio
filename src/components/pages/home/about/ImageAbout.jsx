import styled from "styled-components";

export default function ImageAbout() {
  return (
    <ImageAboutStyled className="image-about">
      <img src="/photo-profil.jpg" alt="picture-Nhat" />
    </ImageAboutStyled>
  );
}

const ImageAboutStyled = styled.div`
  height: 60%;
  width: 40%;

  /* Create a circular shape with unique border-radius values */
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;

    /* Scale the image to fit the container */
    object-fit: cover;
  }

  @media (max-width: 425px) {
    width: 70%;
    height: 30%;
  }
`;
