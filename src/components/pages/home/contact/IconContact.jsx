import styled from "styled-components";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { theme } from "../../../theme";
import { SocialIcon } from "../../../../reusable ui/SocialIcon";

export default function IconContact() {
  return (
    <IconContactStyled className="icon-contact">
      Copyright © 2024. All rights are reserved
      <div className="icon-right-side">
        <SocialIcon icon={<GrGithub />} url="https://github.com/NhatHONGUYEN" />
        <SocialIcon
          icon={<FaLinkedin />}
          url="https://www.linkedin.com/in/nhat-quan-ho-nguyen/"
        />
        <SocialIcon
          icon={<IoLogoInstagram />}
          url="https://www.instagram.com/nhatflux/"
        />
      </div>
    </IconContactStyled>
  );
}

const IconContactStyled = styled.div`
  padding-top: 50px;
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .icon-right-side {
    font-size: 30px;
    display: flex;
    justify-content: space-evenly;
    width: 15%;
    svg {
      color: black;
      transition: transform 0.2s, color 0.2s;

      &:hover {
        transform: translateY(-10px);
        color: ${theme.colors.orange};
      }
    }
  }
`;
