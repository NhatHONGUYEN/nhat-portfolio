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
  width: 40%;
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
`;
