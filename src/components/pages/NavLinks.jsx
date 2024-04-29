import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavLinks() {
  return (
    <NavLinksStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </NavLinksStyled>
  );
}

const NavLinksStyled = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 17px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
