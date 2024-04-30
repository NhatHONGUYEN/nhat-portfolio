import styled from "styled-components";
import { theme } from "../theme";

export default function Logo() {
  return <LogoStyled className="logo">NHAT</LogoStyled>;
}
const LogoStyled = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${theme.colors.loginLine};
`;
