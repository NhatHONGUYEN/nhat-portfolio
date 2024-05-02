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

  @media (min-width: 769px) and (max-width: 1024px) {
    .icon-text-container {
      display: flex;
      align-items: center;
      gap: 2vh;
      font-size: 1rem;

      width: 100%;

      svg {
        height: 3vh;
        width: 3vh;
        margin-right: 0px;
      }
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    .icon-text-container {
      display: flex;
      align-items: center;
      gap: 0rem;
      font-size: 0.9rem;

      width: 100%;

      svg {
        height: 3vh;
        width: 3vh;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 425px) {
    .icon-text-container {
      display: flex;
      align-items: center;
      gap: 0rem;
      font-size: 0.7rem;

      width: 100%;

      svg {
        height: 2vh;
        width: 2vh;
        margin-right: 10px;
      }
    }
  }
`;
