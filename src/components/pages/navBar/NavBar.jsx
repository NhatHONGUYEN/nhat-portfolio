import styled from "styled-components";
import Logo from "./Logo";
import NavLinks from "./navLinks/NavLinks";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo />
      <NavLinks />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
  position: fixed;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 10px 0px;
  padding: 25px 50px 40px 25px;
  z-index: 1000;

  @media (min-width: 426px) and (max-width: 768px) {
    width: 768px;
  }

  @media (max-width: 425px) {
    width: 425px;
  }
`;
