import React, { useState } from "react";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import logoNav from "../assets/LogoFuente-Nav.svg";

const NavMenuStyles = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #f0f0ff;
  .wrapper {
    width: 100%;
    /* max-width: 1300px; */
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
  }
  .nav__logo {
    /* margin-left: 2.5rem; */
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    img {
      width: 100%;
    }
  }
  .nav__menu {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    /* margin-right: 1.5rem; */
  }
  .nav__item {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .nav__link {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 2.5rem;
    color: var(--font-color-2);

    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    border-radius: 10px;
    /* transition: 0.5s all ease; */
    &:hover {
      color: var(--white);
      /* transition: 0.3s ease; */
      background-color: var(--tercer-color);
      border-radius: 4px;
      transition: all 0.2s ease-out;
    }
  }
  .nav__icon-menu {
    display: none;
  }
  @media screen and (max-width: 960px) {
    .nav__menu {
      position: absolute;
      top: 80px;
      background-color: #f0f0ff;
      position: absolute;
      top: 70px;
      //left: -100%;  //Import
      right: -110%;
      width: 100%;
      height: 90vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      transition: 0.5s all ease;
    }
    .nav__menu.open__menu {
      width: 50%;
      right: 0;
      margin: 0;
    }
    .nav__item {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav__link {
      width: 100%;
    }
    .nav__icon-menu {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right: 1rem;
      color: var(--secun-color);
    }
  }
`;

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <NavMenuStyles>
      <div className="wrapper bd-container">
        <div className="nav__logo">
          <img src={logoNav} alt="" />
        </div>

        <div
          className="nav__icon-menu iconSize"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <CgMenu /> : <CgClose />}
        </div>

        <ul className={!showMobileMenu ? "nav__menu open__menu" : "nav__menu"}>
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
