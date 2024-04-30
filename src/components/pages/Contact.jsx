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
          <p>Contact</p>
          <h1>Si vous voulez en savoir plus! </h1>
        </div>
        <div className="icon-text">
          <div className="phone">
            <PiPhoneFill />
            <div className="right-side">
              <div>
                <h4>Phone</h4>
                <p>07 69 57 74 67 69</p>
              </div>
            </div>
          </div>
          <div className="mail">
            <MdOutlineEmail />
            <div className="right-side">
              <h4>Mail</h4> hnnhat@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="icon-contact">
        Copyright © 2024. All rights are reserved
        <div className="icon-right-side">
          <GrGithub /> <FaLinkedin />
          <IoLogoInstagram />
        </div>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  height: 40vh;
  width: 100%;
  padding: 0 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${theme.colors.background_grey};

  .text-contact {
    width: 400px;

    p {
      font-weight: bold;
      font-size: 17px;
    }

    h1 {
      font-weight: bold;
      font-size: 25px;
      color: ${theme.colors.orange};
    }
  }

  .icon-text {
    padding-top: 50px;
    width: 600px;
    display: flex;
    justify-content: space-between;

    .phone,
    .mail {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;

      svg {
        width: 30px;
        height: 30px;
        border: 1px solid black;
        border-radius: 1000px;
      }

      div {
        margin-left: 10px;
        h4 {
          font-weight: bold;
        }
      }
    }
  }

  .icon-contact {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .icon-right-side {
      font-size: 30px;
      display: flex;
      justify-content: space-evenly;
      width: 200px;
    }
  }
`;
