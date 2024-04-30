import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { theme } from "../theme";

export default function NavLinks() {
  return (
    <NavLinksStyled>
      <StyledLink to="/" isSmooth={true} smooth={true} duration={500}>
        Home
      </StyledLink>
      <StyledLink to="about" isSmooth={true} smooth={true} duration={500}>
        About
      </StyledLink>
      <StyledLink to="projects" isSmooth={true} smooth={true} duration={500}>
        Projects
      </StyledLink>
      <StyledLink to="contact" isSmooth={true} smooth={true} duration={500}>
        Contact
      </StyledLink>
    </NavLinksStyled>
  );
}

const NavLinksStyled = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 17px;
`;

const StyledLink = styled(({ isSmooth, ...props }) => {
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
