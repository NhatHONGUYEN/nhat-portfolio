import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Skills() {
  return (
    <SkillsStyled className="skills">
      <p>
        <span className="tech-stack-text">Tech Stack |</span>
        <span className="icon-tech">
          <FaHtml5 /> <IoLogoCss3 /> <RiJavascriptFill /> <FaReact />
        </span>
      </p>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.div`
  display: flex;
  align-items: center;

  .tech-stack-text {
    margin-right: 30px;
  }

  .icon-tech {
    display: inline-flex;
    transform: translateY(10px);
    font-size: 2rem;

    svg {
      transition: transform 0.2s, color 0.2s;

      &:hover {
        transform: translateY(-10px);
        color: ${theme.colors.orange};
      }
    }
  }
`;
