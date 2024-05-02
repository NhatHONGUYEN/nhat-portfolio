import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import styled from "styled-components";
import { ContactInfo } from "../../../../reusable ui/ContactInfo";
import { theme } from "../../../theme";

export default function IconText() {
  return (
    <IconTextStyled className="icon-text">
      <ContactInfo
        icon={<PiPhoneFill />}
        title="Phone"
        value="07 69 57 74 67 69"
      />
      <ContactInfo
        icon={<MdOutlineEmail />}
        title="Mail"
        value={<a href="mailto:hnnhat67@gmail.com">hnnhat67@gmail.com</a>}
      />
    </IconTextStyled>
  );
}

const IconTextStyled = styled.div`
  padding-top: 3%;
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 10vh;

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.orange};
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100vh;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    gap: 5vh;
    width: 100vh;
  }

  @media (max-width: 425px) {
    gap: 2vh;
    width: 100vh;
  }
`;
