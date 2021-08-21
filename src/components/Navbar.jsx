import React from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";

const NavMenuStyles = styled.nav`
  color: var(--gray-1);
`;

export default function Navbar() {
  return (
    <NavMenuStyles>
      <div className="wrapper">
        <div className="nav__logo">Logo</div>

        <div className="nav__icon-menu">
          <CgMenu />
        </div>

        <ul className="nav__menu">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Inicio
            </a>
          </li>
          <li className="nav__item">
            <a href="#proyect" className="nav__link">
              Proyecto
            </a>
          </li>
          <li className="nav__item">
            <a href="#donaciones" className="nav__link">
              Donaciones
            </a>
          </li>
        </ul>
      </div>
    </NavMenuStyles>
  );
}
