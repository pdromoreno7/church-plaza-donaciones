import React from "react";
import styled from "styled-components";
// import { CgMenu } from "react-icons/cg";

const NavMenuStyles = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #f0f0ff;
  .wrapper {
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
  }
  .nav__logo {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
  .nav__menu {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    .nav__item {
      height: 100%;
      .nav__link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0.5rem 2.5rem;
        color: #64b2ff;
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 300;
        cursor: pointer;
        transition: 0.5s all ease;
        &:hover {
          color: #fff;
          background-color: #e0792a;
          transition: 0.5s all ease;
        }
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavMenuStyles>
      <div className="wrapper">
        <div className="nav__logo">Logo</div>

        {/* <div className="nav__icon-menu">
          <CgMenu />
        </div> */}

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
