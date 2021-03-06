import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import logoNav from "../assets/LogoFuente-Nav.svg";

const NavMenuStyles = styled.nav`
  position: fixed;
  z-index: var(--z-fixed);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #f0f0ff;
  color: var(--font-color-1);
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
    /* margin-left: 1rem; */
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
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      transition: 0.5s all ease;
    }
    .nav__logo {
      width: 150px;
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

      color: var(--secun-color);
    }
  }
`;

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <NavMenuStyles>
      <div className="wrapper bd-container">
        <div data-aos="fade" className="nav__logo">
          <img src={logoNav} alt="" />
        </div>

        <div
          className="nav__icon-menu iconSize"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <CgClose /> : <CgMenu />}
        </div>

        <ul className={!showMobileMenu ? "nav__menu " : "nav__menu open__menu"}>
          <li className="nav__item">
            <a
              href="#inicio"
              className="nav__link"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Inicio
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#proyect"
              className="nav__link"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Proyecto
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#donacion"
              className="nav__link"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Donaciones
            </a>
          </li>
        </ul>
      </div>
    </NavMenuStyles>
  );
}
