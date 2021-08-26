import React from "react";
import styled from "styled-components";
import ProyectImg from "../assets/proyect__info-img.png";
import { Button } from "./Button";

const ProyectSectionStyles = styled.section`
  /* margin: 0 15px; */
  margin-left: 1rem;
  padding-top: 80px;
  padding-bottom: 50px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  .proyect__title {
    margin-bottom: 24px;
  }
  .proyect__main {
    width: 90%;
    display: grid;
    gap: 2rem;
    grid-template-columns: 60% 1fr;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    /* background-color: var(--white); */
  }
  .proyect__graphi {
    display: flex;
    gap: 30px;
    background-color: var(--white);
    border-radius: 4px;
    padding: 32px 24px;
    height: 100%;
  }
  .proyect__graphi-number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 530px;
    height: 320px;
    background-color: var(--main-color);
  }
  .proyect__graphi-description {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    line-height: 1.5em;
  }
  .proyect__donacion {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    line-height: 1.5em;
    background-color: var(--white);
    border-radius: 4px;
    padding: 32px 24px;
    height: 100%;
  }
`;

export function ProyectSection() {
  return (
    <ProyectSectionStyles>
      <div className="bd-container">
        <div className="proyect__title">
          <h2>Anvance del proyecto</h2>
        </div>
        <div className="proyect__main">
          <div className="proyect__graphi">
            <figure className="proyect__graphi-number">
              <img src={ProyectImg} alt="" />
            </figure>
            <div className="proyect__graphi-description">
              <h3>Levantamiento de paredes</h3>
              <p>
                Nos encontramos en la etapa de levantamiento de paredes de
                nuestro lugar de encuentro. <br />
                <br />
                Este consta de tres etapas que son recaudación, realización y
                finalización.
              </p>
            </div>
          </div>
          <div className="proyect__donacion">
            <h3>Conoce como donar</h3>
            <p>
              Puedes formar parte de este proyecto y darnos tu ayuda para
              hacerlo una realidad <br />
              <br />
              Las donaciones se ven reflejadas cada domingo en la tarde hora
              colombia
            </p>
            <Button btnText="Ver medios de donación" />
          </div>
        </div>
      </div>
    </ProyectSectionStyles>
  );
}
