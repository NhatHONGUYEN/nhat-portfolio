import styled from "styled-components";
import { theme } from "../../../theme";
import TextContact from "./TextContact";
import IconText from "./IconText";
import IconContact from "./IconContact";

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <TextContact />
      <div className="middle-part-footer">
        <IconText />
      </div>

      <IconContact />
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  height: 40vh;
  width: 100%;
  padding: 0 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.background_grey};

  .right-side .email-link {
    color: black;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.orange};
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5% 5%;
    height: 50vh;

    .text-contact {
      p {
        font-size: 1.7rem;
      }

      h1 {
        font-size: 1.7rem;
      }
    }
    .middle-part-footer {
      .icon-text {
        width: 70%;

        .phone,
        .mail {
          display: flex;
          justify-content: flex-start;
          height: 3vh;

          svg {
            width: 30px;
            height: 30px;
          }

          p {
            font-size: 0.9rem;
            padding-top: 2px;
          }

          div {
            margin-left: 10px;
            h4 {
              font-size: 0.9rem;
            }
          }
        }
      }

      .right-side .email-link {
        font-size: 0.9rem;
      }
    }

    .icon-contact {
      font-size: 0.9rem;

      .icon-right-side {
        font-size: 1.7rem;
      }
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5% 5%;
    height: 35vh;

    .text-contact {
      width: 100%;

      p {
        font-weight: bold;
        font-size: 1rem;
      }

      h1 {
        font-weight: bold;
        font-size: 1rem;
        color: ${theme.colors.orange};
      }
    }
    .middle-part-footer {
      .icon-text {
        width: 70%;

        .phone,
        .mail {
          display: flex;
          justify-content: flex-start;
          height: 3vh;

          svg {
            width: 30px;
            height: 30px;
          }

          p {
            font-size: 0.8rem;
            padding-top: 4px;
          }

          div {
            margin-left: 10px;
            h4 {
              font-size: 0.8rem;
            }
          }
        }
      }

      .right-side .email-link {
        font-size: 0.8rem;
      }
    }

    .icon-contact {
      font-size: 0.8rem;

      .icon-right-side {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 425px) {
    height: 40vh;
    width: 100%;
    background-color: ${theme.colors.background_grey};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5% 5%;

    .text-contact {
      width: 100%;

      p {
        font-weight: bold;
        font-size: 0.7rem;
      }

      h1 {
        font-weight: bold;
        font-size: 0.7rem;
        color: ${theme.colors.orange};
      }
    }
    .middle-part-footer {
      .icon-text {
        padding-top: 0;
        width: 100%;

        .phone,
        .mail {
          display: flex;
          justify-content: flex-start;

          height: 5vh;
          width: 50%;

          svg {
            width: 25px;
            height: 25px;
            border-radius: 1000px;
            background-color: ${theme.colors.orange};
          }

          p {
            font-size: 0.7rem;
            padding-top: 6px;
          }

          div {
            margin-left: 10px;
            h4 {
              font-weight: bold;
              font-size: 0.7rem;
            }
          }
        }
      }

      .right-side .email-link {
        color: black;
        text-decoration: none;
        font-size: 0.7rem;

        &:hover {
          color: ${theme.colors.orange};
        }
      }
    }

    .icon-contact {
      padding-top: 20px;
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: space-between;

      font-size: 0.7rem;

      .icon-right-side {
        font-size: 1rem;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
`;
