import React from "react";
import styled from "styled-components";
import heroImg from "../assets/Hero-Image.jpg";
import { Button } from "./Button";

const HeroStyles = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  background-color: var(--white);
  .hero__main {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .hero__info {
    width: 400px;
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
`;

export function Hero() {
  return (
    <HeroStyles>
      <div className="hero__main bd-container ">
        <div className="hero__info">
          <h1>Reedificando nuestro altar</h1>
          <p>Conoce como lo estamos haciendo y como puedes formar parte </p>
          <Button btnText="Conocer el proyecto" />
        </div>
        <div className="hero__image">
          <img src={heroImg} alt="" className="hero__image-img" />
        </div>
      </div>
    </HeroStyles>
  );
}
