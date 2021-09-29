/* eslint-disable eqeqeq */
// import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import styled from "styled-components";
import {
  progresResult,
  resultRealizacion,
} from "../assets/data/porsentajeDonacion";

const BarProgressStyles = styled.section`
  padding: 0;
  width: 100%;
  .progress__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    background-color: var(--white);
    padding: 0 30px;
    border-radius: 5px;
  }
  .progress__box {
    width: 100%;
    height: 70px;
    /* background-color: grey; */
    position: relative;
  }
  .progress__item {
    position: absolute;
    top: 20%;
    display: flex;
    width: 20%;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    p {
      margin-top: 8px;
      color: var(--grey-font);
    }
  }

  .bolita {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b-active {
    background-color: var(--secun-color);
  }
  .item-1 {
    left: -5.5%;
  }
  .item-2 {
    left: 40%;
  }
  .item-3 {
    right: -6%;
  }
  .progress__barra-1 {
    position: absolute;
    top: 31%;
    left: 5%;
    height: 6px;
    width: 45%;
    background-color: var(--grey);
    z-index: 1;
    .barra__mivel-1 {
      width: ${progresResult}%;
      height: 100%;
      background-color: var(--secun-color);
    }
  }
  .progress__barra-2 {
    position: absolute;
    top: 31%;
    left: 50%;
    height: 6px;
    width: 46%;
    background-color: var(--grey);
    z-index: 1;
    .barra__mivel-2 {
      width: ${resultRealizacion}%;
      height: 100%;
      background-color: var(--secun-color);
    }
  }
  /* @media screen and (max-width: 960px){
   
  }  */
  .check-desactivado {
    display: none;
  }
  .check-activado {
    color: white;
    font-size: 15px;
    transition: 1s;
  }
  @media screen and (max-width: 745px) {
    .progress__item {
      p {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 427px) {
    .progress__item {
      p {
        font-size: 0.7rem;
      }
    }
  }
`;

export function BarProgress() {
  // const [showCheck, setShowCheck] = useState(false);

  function setShowCheck(resultData) {
    if (resultData == 100) {
      let ShowCheck = true;
      return ShowCheck;
    } else {
      let noShowCheck = false;
      return noShowCheck;
    }
  }

  return (
    <BarProgressStyles className="bd-container">
      <div className="progress__container">
        <div className="progress__box">
          <div className="progress__item item-1">
            <div className="bolita b-active">
              {setShowCheck(progresResult) ? (
                <BsCheck className="check-activado" />
              ) : (
                <BsCheck className="check-desactivado" />
              )}
            </div>
            <p>Recaudación</p>
          </div>
          <div className="progress__barra-1">
            <div className="barra__mivel-1"></div>
          </div>
          <div className="progress__item item-2">
            <div
              className={`${
                setShowCheck(progresResult) ? "bolita b-active" : "bolita"
              }`}
            >
              {setShowCheck(resultRealizacion) ? (
                <BsCheck className="check-activado" />
              ) : (
                <BsCheck className="check-desactivado" />
              )}
            </div>
            <p>Realización</p>
          </div>
          <div className="progress__barra-2">
            <div className="barra__mivel-2"></div>
          </div>
          <div className="progress__item item-3">
            <div
              className={`${
                setShowCheck(resultRealizacion) ? "bolita b-active" : "bolita"
              }`}
            >
              {setShowCheck(resultRealizacion) ? (
                <BsCheck className="check-activado" />
              ) : (
                <BsCheck className="check-desactivado" />
              )}
            </div>
            <p>Finalización</p>
          </div>
        </div>
      </div>
    </BarProgressStyles>
  );
}
