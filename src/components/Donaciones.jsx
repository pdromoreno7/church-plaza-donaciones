import React from "react";
import { BanckCard } from "./BanckCard";
import NequiLogo from "../assets/nequi-logo.svg";
import Bancolombia from "../assets/bancolombia-logo.svg";

import styled from "styled-components";

const DontationStyle = styled.section`
  /* padding-top: 30px;
  padding-bottom: 60px;
  margin-bottom: 80px;
  margin-top: 30px; */
  padding-top: 80px;
  padding-bottom: 100px;

  .donation__title {
    font-size: var(--h1-font-size);
    font-weight: var(--Bold-font);
    margin-bottom: 20px;
  }
  .donation__main {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .donation__main-items {
    max-width: 566px;
    height: 283px;
  }
  @media screen and (max-width: 960px) {
    .donation__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .donation__main-items {
      width: 100%;
    }
    .donation__main {
      width: 100%;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  /* @media screen and (max-width: 530px) {
    .donation__main-items {
      height: 200px;
    }
  } */
`;

export function Donaciones() {
  return (
    <DontationStyle id="donacion">
      <div className="bd-container">
        <div className="donation__container">
          <h2 className="donation__title">Medios de donación</h2>
          <div className="donation__main">
            <div className="donation__main-items">
              <BanckCard
                logoBanck={NequiLogo}
                number={3144516187}
                Link="https://recarga.nequi.com.co/bdigitalpsl/#!/"
              />
            </div>
            <div className="donation__main-items">
              <BanckCard logoBanck={Bancolombia} number={3144516187} />
            </div>
          </div>
        </div>
      </div>
    </DontationStyle>
  );
}
