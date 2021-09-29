import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Button } from "./Button";

const BanckStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 566px;
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
    /* top: 66%; */
    justify-self: flex-end;
    align-self: flex-end;
    /* left: 80%; */
    /* position: absolute; */
  }
  /* @media screen and (max-width: 530px) {
    height: 200px;
    .card__logo {
    }
  } */
`;

export function BanckCard({ logoBanck, number, link }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <BanckStyle data-aos="fade-up">
      <div className="card__container">
        <figure className="card__logo">
          <img src={logoBanck} alt="Icono de banco" />
        </figure>
        <div className="card__info">
          <p>Numero de cuenta</p>
          <p className="card__info-number">{number}</p>
        </div>
        <div className="card__button">
          <Button btnText="Donar" outline btnLink={link} />
        </div>
      </div>
    </BanckStyle>
  );
}
