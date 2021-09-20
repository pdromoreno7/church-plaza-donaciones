import styled from "styled-components";
import { progresResult } from "../assets/data/porsentajeDonacion";

const BarProgressStyles = styled.section`
  position: relative;

  .progress__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    width: 90%;
    background-color: var(--white);
    padding: 0 30px;
    border-radius: 5px;
  }
  .wrapper-progressBar {
    width: 100%;

    /* position: absolute; */
  }

  .progressBar li {
    list-style-type: none;
    float: left;
    width: 45%;
    position: relative;

    /* text-align: center; */
  }

  .progressBar li:before {
    content: " ";
    line-height: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 30px 10px;
    background-color: white;
  }

  .progressBar li:after {
    content: "";
    position: absolute;
    width: ${progresResult}%;
    height: 6px;
    background-color: #ddd;
    top: 15px;
    left: -90%;
    /* z-index: -1; */
  }

  .progressBar li:first-child:after {
    content: none;
  }

  .progressBar li.active {
    color: var(--font-color-2);
  }

  .progressBar li.active:before {
    border-color: var(--secun-color);
    background-color: var(--secun-color);
  }

  .progressBar li.active + li:after {
    background-color: var(--secun-color);
  }
`;

export function BarProgress() {
  return (
    <BarProgressStyles className="bd-container">
      <div className="progress__container">
        <div className="wrapper-progressBar">
          <ul className="progressBar">
            <li className="active">Recaudación</li>
            <li className="active">Realización</li>
            {/* <li>Paid</li> */}
          </ul>
        </div>
      </div>
    </BarProgressStyles>
  );
}
