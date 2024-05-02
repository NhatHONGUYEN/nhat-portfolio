import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function SocialIcons() {
  return (
    <SocialIconsStyled className="icon">
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
    </SocialIconsStyled>
  );
}

const SocialIconsStyled = styled.span`
  height: 20%;
  font-size: 2rem;

  svg {
    color: black;
    transition: transform 0.2s, color 0.2s;

    &:hover {
      transform: translateY(-10px);
      color: ${theme.colors.orange};
    }
  }
`;
