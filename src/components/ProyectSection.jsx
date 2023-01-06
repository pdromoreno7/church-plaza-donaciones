import React, { useEffect } from "react";
import styled from "styled-components";
// import ProyectImg from "../assets/proyect__info-img.png";
import { BarProgress } from "./BarProgress";
import { Button } from "./Button";
import CircleProgress from "./CircleProgress";
import Aos from "aos";
import "aos/dist/aos.css";

//prueba de despliegue

const ProyectSectionStyles = styled.section`
  /* margin: 0 15px; */
  /* margin-left: 1rem; */
  padding-top: 80px;
  padding-bottom: 30px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
    padding: 0;
    margin-bottom: 40px;

    /* background-color: var(--white); */
  }
  .proyect__bar {
    width: 90%;
  }
  .proyect__graphi {
    display: flex;
    gap: 1.5rem;
    background-color: var(--white);
    border-radius: 4px;
    padding: 30px 20px;
    height: 100%;
  }
  .proyect__graphi-buttom {
    display: none;
  }
  .proyect__graphi-number {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    min-width: 236.83px;
    height: 320px;
    background-color: var(--main-color);
  }
  .proyect__graphi-description {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    line-height: 1.5rem;
  }
  .proyect__donacion {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* line-height: 1.5em; */
    background-color: var(--white);
    border-radius: 4px;
    padding: 25px 20px;
    height: 100%;
  }
  .proyect__donacion-description {
    height: auto;
  }
  @media screen and (max-width: 960px) {
    /* justify-content: center; */
    /* margin-left: 0; */
    .project-container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .proyect__main {
      grid-template-columns: 1fr;
      width: 100%;
    }
    .proyect__bar {
      width: 100%;
    }
    .proyect__graphi {
      flex-direction: column;
      align-items: center;
      /* padding: 5rem; */
    }
    .proyect__graphi-number {
      width: 70%;
    }
    .proyect__graphi-description,
    .proyect__donacion-description {
      text-align: center;
      width: 70%;
    }
    .proyect__donacion {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      /* padding: 5rem; */
      p {
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 475px) {
    /* .proyect__main {
      margin-bottom: 20px;
    } */
    .proyect__graphi-number {
      width: 100%;
    }
    .proyect__graphi-buttom {
      display: initial;
      margin-bottom: 20px;
    }
    .proyect__donacion {
      display: none;
    }
    .proyect__graphi-description {
      width: 95%;
    }
  }
`;

export function ProyectSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ProyectSectionStyles id="proyect">
      <div className="project-container bd-container">
        <div className="proyect__title">
          <h2>Anvance del proyecto</h2>
        </div>
        <div className="proyect__main">
          <div className="proyect__graphi">
            <figure data-aos="fade-right" className="proyect__graphi-number">
              {/* <img src={ProyectImg} alt="" /> */}
              <CircleProgress />
              <h3>Recaudación</h3>
            </figure>
            <div data-aos="fade-right" className="proyect__graphi-description">
              <h3>Estado actual del proyecto</h3>
              <p>
                Nos encontramos en la etapa de levantamiento de paredes, este
                periodo consta de tres etapas: Recaudación, realización y
                finalización. <br />
                <br />
                {/* Este consta de tres etapas que son recaudación, realización y
                finalización. */}
              </p>
              <div className="proyect__graphi-buttom">
                <Button btnText="Hacer donación" btnLink="#donacion" />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="proyect__donacion">
            <div className="proyect__donacion-description">
              <h3>¿Cómo donar?</h3>
              <p>
                Tu donación de hoy ayudará a construir un nuevo y renovado
                templo y gracias a esto más personas podrán congregarse y
                recibir guía espiritual.
                <br />
                <br />
                {/* Las donaciones se ven reflejadas cada domingo en la tarde hora
                colombia */}
              </p>
            </div>
            <div className="proyect__donacion-buttom">
              <Button btnText="Quiero donar" btnLink="#donacion" />
            </div>
          </div>
        </div>
        <div className="proyect__bar">
          <BarProgress />
        </div>
      </div>
    </ProyectSectionStyles>
  );
}
