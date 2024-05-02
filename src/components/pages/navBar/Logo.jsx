import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return <LogoStyled className="logo">NHAT</LogoStyled>;
}
const LogoStyled = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.colors.orange};

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
