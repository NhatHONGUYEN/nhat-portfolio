import styled from "styled-components";
import { theme } from "../../../theme";

export default function TextContact() {
  return (
    <TextContactStyled className="text-contact">
      <p>Contact</p>
      <h1>Si vous voulez en savoir plus! </h1>
    </TextContactStyled>
  );
}

const TextContactStyled = styled.div`
  width: 40%;

  p {
    font-weight: bold;
    font-size: 1.3rem;
  }

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${theme.colors.orange};
  }
`;
