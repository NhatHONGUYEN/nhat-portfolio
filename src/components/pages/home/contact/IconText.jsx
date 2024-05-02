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
        value="hnnhat@gmail.com"
      />
    </IconTextStyled>
  );
}

const IconTextStyled = styled.div`
  padding-top: 3%;
  width: 40%;
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
`;
