import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { theme } from "../theme";

export const StyledLink = styled(({ isSmooth, ...props }) => {
  const LinkComponent = isSmooth ? ScrollLink : RouterLink;
  return <LinkComponent {...props} />;
})`
  text-decoration: none;
  font-weight: bold;
  color: black;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.5);
    color: ${theme.colors.orange};
  }
`;
