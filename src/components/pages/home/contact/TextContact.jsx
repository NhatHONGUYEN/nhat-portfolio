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

  @media (min-width: 769px) and (max-width: 1024px) {
    p {
      font-size: 1.7rem;
    }

    h1 {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 100%;

    p {
      font-weight: bold;
      font-size: 1rem;
    }

    h1 {
      font-weight: bold;
      font-size: 1rem;
      color: ${theme.colors.orange};
    }
  }

  @media (max-width: 425px) {
    width: 100%;

    p {
      font-weight: bold;
      font-size: 0.7rem;
    }

    h1 {
      font-weight: bold;
      font-size: 0.7rem;
      color: ${theme.colors.orange};
    }
  }
`;
