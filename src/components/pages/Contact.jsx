import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import styled from "styled-components";
import { theme } from "../theme";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <div className="contact-container">
        <div className="text-contact">
          <h1>Contactez moi</h1>
        </div>
        <div className="icon-contact">
          <PiPhoneFill /> <MdOutlineEmail /> <GrGithub /> <FaLinkedin />
          <IoLogoInstagram />
        </div>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #f9f9f9;
  color: black;
`;
