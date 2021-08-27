import React from "react";
import { BanckCard } from "./BanckCard";
import NequiLogo from "../assets/nequi-logo.svg";

export function Donaciones() {
  return (
    <div>
      <div className="bd-container">
        <h1>Donaciones</h1>
        <BanckCard logoBanck={NequiLogo} number={3144516187} />
      </div>
    </div>
  );
}
