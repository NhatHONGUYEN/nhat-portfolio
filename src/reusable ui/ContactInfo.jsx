import styled from "styled-components";
import { theme } from "../components/theme";

export const ContactInfo = ({ icon, title, value }) => (
  <ContactInfoStyled>
    <div className="right-side">
      <div className="icon-text-container">
        {icon}
        <div>
          <h4>{title}</h4>
          {typeof value === "string" ? (
            <p>{value}</p>
          ) : (
            <a className="email-link" href={`mailto:${value}`}>
              {value}
            </a>
          )}
        </div>
      </div>
    </div>
  </ContactInfoStyled>
);

const ContactInfoStyled = styled.div`
  .icon-text-container {
    display: flex;
    align-items: center;
    gap: 3rem;

    svg {
      height: 3vh;
      width: 3vh;
      border-radius: 1000px;
      background-color: ${theme.colors.orange};
    }
  }
`;
