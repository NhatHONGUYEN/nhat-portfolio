import { StyledLink } from "./StyledLink";
import styled from "styled-components";

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
  font-size: 1.3rem;
  cursor: pointer;

  @media (max-width: 425px) {
    font-size: 1rem;
    gap: 1rem;
  }
`;
