/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import footerLogo from "../assets/LogoGrey-footer.svg";
import { TiSocialYoutube } from "react-icons/ti";

const FooterStyles = styled.footer`
  width: 100%;
  border-top: 1px solid #979797;
  .footer__container {
    margin-top: 50px;
    margin-bottom: 65px;
    display: flex;
    gap: 3rem;
  }
  .footer__nav,
  .footer__contact {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    ul {
      line-height: 2rem;
      a {
        color: var(--font-color);
      }
      a:hover {
        color: var(--font-color-2);
        transition: 0.2s ease-out;
      }
    }
  }
  .footer__nav-title {
    color: var(--font-color-2);
    font-weight: var(--medium-font);
  }

  .footer__contact a {
    color: var(--font-color);
    display: flex;
    align-items: center;
    gap: 0.3rem;
    svg {
      font-size: 1.2rem;
    }
    :hover {
      color: var(--font-color-2);
      transition: 0.2s ease-out;
    }
  }
  @media screen and (max-width: 960px) {
    .footer__container {
      justify-content: center;
    }
  }
  @media screen and (max-width: 700px) {
    .footer__container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export function Footer() {
  return (
    <FooterStyles>
      <div className="footer__container bd-container">
        <div className="footer__logo">
          <img src={footerLogo} alt="Logo fuente de poder " />
        </div>
        <div className="footer__nav">
          <p className="footer__nav-title">Funciones</p>
          <ul>
            <li>
              <a href="#inicio"> Inicio</a>
            </li>
            <li>
              <a href="#proyect"> Nombre del proyecto</a>
            </li>
            <li>
              <a href="#donacion"> Medios de donación</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <p className="footer__nav-title">Miranos en</p>
          <a
            href="https://www.youtube.com/channel/UCUKthUop2EVI6neyzsgiA8A"
            target="_blank"
          >
            <TiSocialYoutube />
            Iglesia Fuente de Poder
          </a>
        </div>
      </div>
    </FooterStyles>
  );
}
