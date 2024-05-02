import styled from "styled-components";
import { theme } from "../../../theme";
import TextContact from "./TextContact";
import IconText from "./IconText";
import IconContact from "./IconContact";

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <TextContact />
      <IconText />
      <IconContact />
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  height: 40vh;
  width: 100%;
  padding: 0 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.background_grey};

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5% 5%;
    height: 50vh;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5% 5%;
    height: 35vh;
  }

  @media (max-width: 425px) {
    height: 30vh;
    width: 100%;
    background-color: ${theme.colors.background_grey};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5% 5%;
  }
`;
