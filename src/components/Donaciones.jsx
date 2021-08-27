import React from "react";
import { BanckCard } from "./BanckCard";
import NequiLogo from "../assets/nequi-logo.svg";
import Bancolombia from "../assets/bancolombia-logo.svg";

import styled from "styled-components";

const DontationStyle = styled.section`
  padding: 30px 0;
  .donation__title {
    font-size: var(--h1-font-size);
    font-weight: var(--Bold-font);
    margin-bottom: 20px;
  }
  .donation__main {
    display: flex;
    gap: 20px;
  }
`;

export function Donaciones() {
  return (
    <DontationStyle>
      <div className="bd-container">
        <h2 className="donation__title">Medios de donación</h2>
        <div className="donation__main">
          <BanckCard logoBanck={NequiLogo} number={3144516187} />
          <BanckCard logoBanck={Bancolombia} number={3144516187} />
        </div>
      </div>
    </DontationStyle>
  );
}
