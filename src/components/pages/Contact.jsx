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
              <h4>Mail</h4>
              <a className="email-link" href="mailto:hnnhat@gmail.com">
                hnnhat@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-contact">
        Copyright © 2024. All rights are reserved
        <div className="icon-right-side">
          <a
            href="https://github.com/NhatHONGUYEN"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nhat-quan-ho-nguyen/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/nhatflux/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram />
          </a>
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
        border-radius: 1000px;
        background-color: ${theme.colors.orange};
      }

      div {
        margin-left: 10px;
        h4 {
          font-weight: bold;
        }
      }
    }
  }

  .right-side .email-link {
    color: black;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.orange};
    }
  }

  .icon-contact {
    padding-top: 20px;
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .icon-right-side {
      font-size: 30px;
      display: flex;
      justify-content: space-evenly;
      width: 200px;
      svg {
        color: black;
        transition: transform 0.2s, color 0.2s;

        &:hover {
          transform: translateY(-10px);
          color: ${theme.colors.orange};
        }
      }
    }
  }
`;
