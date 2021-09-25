import React from "react";
import styled from "styled-components";
import heroImg from "../assets/Hero-Image.jpg";
import heroImgGradiente from "../assets/Hero-Image-gradiente.jpg";
import { Button } from "./Button";

const HeroStyles = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;

  background-color: var(--white);
  .hero__main {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 60%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .hero__info {
    width: 80%;
    h1 {
      font-size: var(--biggest-font-size);
    }
    /* margin-left: 1rem; */
  }
  .hero__image {
    height: 100%;
  }
  .hero__image-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
  .hero__fondo-mobile {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .hero__main {
      display: flex;
      justify-content: center;
      margin: 0;
      height: 100vh;
    }
    .hero__image-img {
      display: none;
    }
    .hero__fondo-mobile {
      display: initial;
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
    }
    /* .hero__fondo-mobile {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
      background-image: url(../assets/Hero-Image.jpg);
    } */
    .hero__info {
      display: flex;
      flex-direction: column;

      align-items: center;
      text-align: center;
      position: absolute;
      z-index: var(--z-tooltip);
      top: 50%;
    }
    .bd-container {
      padding: 0;
    }
  }
  @media screen and (max-width: 764px) {
    .hero__info {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export function Hero() {
  return (
    <HeroStyles id="inicio">
      <div className="bd-container">
        <div className="hero__main  ">
          <div className="hero__info">
            <h1>Reedificando nuestro altar</h1>
            <p>Conoce como lo estamos haciendo y como puedes formar parte </p>
            <Button btnText="Conocer el proyecto" btnLink="#proyect" />
          </div>
          <div className="hero__image">
            <img src={heroImg} alt="" className="hero__image-img" />
            <img src={heroImgGradiente} alt="" className="hero__fondo-mobile" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
