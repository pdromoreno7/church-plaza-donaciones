import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const BanckStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 566px;
  height: 283px;
  padding: 30px 25px;
  border-radius: 5px;
  background: var(--card-gradient-color);
  color: var(--white);
  .card__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .card__info p {
    padding-bottom: 1rem;
  }
  .card__info-number {
    letter-spacing: 0.2rem;
  }
  .card__button {
    align-self: flex-end;
  }
`;

export function BanckCard({ logoBanck, number }) {
  return (
    <BanckStyle>
      <div className="card__container">
        <figure>
          <img src={logoBanck} alt="Icono de banco" />
        </figure>
        <div className="card__info">
          <p>Numero de cuenta</p>
          <p className="card__info-number">{number}</p>
        </div>
        <div className="card__button">
          <Button btnText="Donar" outline />
        </div>
      </div>
    </BanckStyle>
  );
}
